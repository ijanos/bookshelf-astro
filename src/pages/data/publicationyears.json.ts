import { books } from "../../data/books";

const yearCounter = new Map<number, number>();
books.filter((b) => b.published)
  .map((m) => m.published).forEach((year) => {
    const n = yearCounter.has(year) ? yearCounter.get(year)! : 0;
    yearCounter.set(year, n + 1);
  });

const maxyear = Math.max(...yearCounter.keys());
const minyear = Math.min(...yearCounter.keys());

const yearArray = Array.from({ length: maxyear - minyear + 1 }, (_, i) => {
  const y = minyear + i;
  return {
    year: y,
    count: yearCounter.get(y) ?? 0,
  };
});

export async function GET() {
    return new Response(JSON.stringify(yearArray));
}
