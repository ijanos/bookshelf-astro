import bookshelf from '../data/bookshelf.json';

const tags = new Map<string, number[]>();

for (const [i, book] of bookshelf.books.entries()) {
  for (const tag of book.tags) {
    if (tags.has(tag)) {
      const indexes = tags.get(tag) ?? [];
      indexes.push(i);
    } else {
      tags.set(tag, Array.from([i]));
    }
  }
}

export function GET(): Response {
  return Response.json(Object.fromEntries(tags));
}
