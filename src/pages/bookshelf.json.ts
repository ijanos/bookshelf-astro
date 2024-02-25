import bookshelf from "../data/bookshelf.json";

export async function GET() {
    return new Response(JSON.stringify(bookshelf));
}
