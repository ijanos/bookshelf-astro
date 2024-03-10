import path from "node:path";
import type { ImageMetadata } from "astro";
import { books } from "../data/books.ts"

function idToString([source, id]: [string, string]) : string {
    return `${source}__${id}__`.toLowerCase();
}

const ids = new Set(books.flatMap((book) => book.id ? Object.entries(book.id).map(idToString) : []));

const covers = new Map<string, () => Promise<{ default: ImageMetadata }>>();

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/covers/*.{jpeg,jpg,png,gif}')

for (const [pathString, imgPromise] of Object.entries(imageFiles)) {
    const fileName = path.parse(pathString).name.toLowerCase();
    if (!ids.has(fileName)) {
        throw Error(`Found cover image ${pathString} with no matching book`);
    } else {
        covers.set(fileName, imgPromise);
    }
}


export { covers, idToString };
