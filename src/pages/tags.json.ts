import bookshelf from "../data/bookshelf.json";

const tags = new Map<string, number[]>();

bookshelf.books.forEach((book, i) => {
    book.tags.forEach((tag) => {
        if (tags.has(tag)) {
            const indexes = tags.get(tag)!;
            indexes.push(i);
        } else {
            tags.set(tag, Array.from([i]));
        }
    });
});

export async function GET() {
    return new Response(JSON.stringify(Object.fromEntries(tags)));
}
