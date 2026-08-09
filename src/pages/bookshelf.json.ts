import bookshelf from '../data/bookshelf.json';

const indexedBooks = bookshelf.books.map((book, index) => ({ ...book, index }));

export function GET(): Response {
  return Response.json(indexedBooks);
}
