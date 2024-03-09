import path from "node:path";
import type { ImageMetadata } from "astro";
import bookshelf from "../data/bookshelf.json";


// science has gone too far...
const ids = new Set(bookshelf.books.flatMap((book) => book.id ? Object.entries(book.id).map(([source, id]) => `${source}__${id}__`.toLowerCase()) : []));

const covers = new Map<string,() => Promise<{ default: ImageMetadata }>>();

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/covers/*.{jpeg,jpg,png,gif}')

for (const [pathString, imgPromise] of Object.entries(imageFiles)) {
    const p = path.parse(pathString).name.toLowerCase();
    if (!ids.has(p)) {
        throw Error(`Found cover image ${pathString} with no matching book`);
    } else {
        covers.set(p, imgPromise);
    }
}


export { covers };
