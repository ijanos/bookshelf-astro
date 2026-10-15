import { books } from '../../data/books';

const yearCounter = new Map<number, number>();
const publishedYears = books.filter((b) => b.published).map((m) => m.published);
for (const year of publishedYears) {
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

export const GET = (): Response => {
  return Response.json(yearArray);
};
