import bookshelf from "../data/bookshelf.json";

const indexedBooks = bookshelf.books.map((book, index) =>  ({...book, index: index}));


export async function GET() {
    return new Response(JSON.stringify(indexedBooks));
}
