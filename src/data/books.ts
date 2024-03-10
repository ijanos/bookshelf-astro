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
    published: number;
    pages?: number;
    tags: string[];
    language: string;
    id?: Id;
}


let ids = new Set();
let author_titles = new Set();

bookshelf.books.forEach(book => {
    if (book.id) {
        Object.entries(book.id).forEach(([idkey, idvalue]) => {
            const idstring = `${idkey}${idvalue}`;
            if (ids.has(idstring)) {
                throw Error(`dupliacate ID found ${idkey}: ${idvalue}`);
            }
            ids.add(idstring);
        })
    }

    const author_title = `${book.author.join()}_${book.title}`.replaceAll(/\s/g,'').toLowerCase();
    if (author_titles.has(author_title)) {
        throw Error(`Possible duplicate book ${book.title}`);
    }
    author_titles.add(author_title);
});


export const books: Book[] = bookshelf.books;
export type { Book };
