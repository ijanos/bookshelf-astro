import type { ImageMetadata } from 'astro';
import { books } from '../data/books.ts';

function idToString([source, id]: [string, string]): string {
  return `${source}__${id}__`.toLowerCase();
}

const ids = new Set(
  books.flatMap((book) => (book.id ? Object.entries(book.id).map(idToString) : [])),
);

const covers = new Map<string, () => Promise<{ default: ImageMetadata }>>();

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/covers/*.{jpeg,jpg,png,gif}');

for (const [pathString, imgPromise] of Object.entries(imageFiles)) {
  const fileName = pathString
    .slice(pathString.lastIndexOf('/') + 1)
    .replace(/\.[^/.]+$/u, '')
    .toLowerCase();
  if (ids.has(fileName)) {
    covers.set(fileName, imgPromise);
  } else {
    throw new Error(`Found cover image ${pathString} with no matching book`);
  }
}

export { covers, idToString };
