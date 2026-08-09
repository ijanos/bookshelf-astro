import bookshelf from './bookshelf.json';

interface Id {
  wikidata?: string;
  olid?: string;
  wikipedia?: string;
  librarything?: string;
  isfdb?: string;
}

interface Book {
  title: string;
  read: string;
  author: string[];
  series?: string;
  published: number;
  pages?: number;
  tags: string[];
  language: string;
  id?: Id;
  index: number;
}

const ids = new Set<string>();
const authorTitles = new Set<string>();

for (const book of bookshelf.books) {
  if (book.id) {
    for (const [idkey, idvalue] of Object.entries(book.id)) {
      const idstring = `${idkey}${idvalue}`;
      if (ids.has(idstring)) {
        throw new Error(`duplicate ID found ${idkey}: ${idvalue}`);
      }
      ids.add(idstring);
    }
  }

  if (book.author.length === 0) {
    throw new Error(`Book ${book.title} has no authors`);
  }

  // const readDate = new Date(book.read);
  // const publishedDate = new Date(book.published);

  // enable this once the read fields are all populated
  // assert(readDate > publishedDate, `${book.title} read: ${book.read} published: ${book.published}`);

  const authorTitle = `${book.author.join()}_${book.title}`.replaceAll(/\s/gu, '').toLowerCase();
  if (authorTitles.has(authorTitle)) {
    throw new Error(`Possible duplicate book ${book.title}`);
  }
  authorTitles.add(authorTitle);
}

const indexedBookshelf = bookshelf.books.map((book, index) => ({ ...book, index }));

export const books: Book[] = indexedBookshelf;
export type { Book };
