import { books } from '../../data/books';

const yearCounter = new Map<number, number>();
const readYears = books
  .filter((b) => b.read.length >= 4)
  .map((b) => Number.parseInt(b.read.slice(0, 4), 10));
for (const year of readYears) {
  const n = yearCounter.get(year) ?? 0;
  yearCounter.set(year, n + 1);
}

const maxyear = Math.max(...yearCounter.keys());
const minyear = Math.min(...yearCounter.keys());

const yearArray = Array.from({ length: maxyear - minyear + 1 }, (_, i) => {
  const y = minyear + i;
  return {
    year: y,
    count: yearCounter.get(y) ?? 0,
  };
});

export function GET(): Response {
  return Response.json(yearArray);
}
