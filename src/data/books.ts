import bookshelf from "./bookshelf.json";
import assert from 'node:assert/strict';

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


let ids = new Set();
let author_titles = new Set();

bookshelf.books.forEach(book => {
    if (book.id) {
        Object.entries(book.id).forEach(([idkey, idvalue]) => {
            const idstring = `${idkey}${idvalue}`;
            if (ids.has(idstring)) {
                throw Error(`duplicate ID found ${idkey}: ${idvalue}`);
            }
            ids.add(idstring);
        })
    }

    assert(book.author.length > 0);

    const readDate = new Date(book.read);
    const publishedDate = new Date(book.published);

    // enable this once the read fields are all populated
    // assert(readDate > publishedDate, `${book.title} read: ${book.read} published: ${book.published}`);

    const author_title = `${book.author.join()}_${book.title}`.replaceAll(/\s/g,'').toLowerCase();
    if (author_titles.has(author_title)) {
        throw Error(`Possible duplicate book ${book.title}`);
    }
    author_titles.add(author_title);
});


const indexedBookshelf = bookshelf.books.map((movie, index) =>  ({...movie, index: index}));

export const books: Book[] = indexedBookshelf;
export type { Book };
