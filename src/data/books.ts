import bookshelf from "./bookshelf.json";

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
    published?: number;
    pages?: number;
    tags: string[];
    language: string;
    id?: Id;
}

export const books: Book[] = bookshelf.books;
export type { Book };
