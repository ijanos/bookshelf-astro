import bookshelf from "../data/bookshelf.json";
import slugify from '@sindresorhus/slugify';

const header = `
  <title>Jano's bookshelf</title>
  <link href="https://bookshelf.janosilles.com"/>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>János Illés</name>
  </author>
  <link href="https://bookshelf.janosilles.com/atom.xml" rel="self"/>
  <id>https://bookshelf.janosilles.com/</id>`;

const entries = bookshelf.books
  .filter((book) => book.read != "")
  .map((book) => `
  <entry>
    <title><![CDATA[ ${book.author} - ${book.title} ]]></title>
    <id>urn:x-book:${slugify(book.title)}---${slugify(book.author.join(''))}</id>
    <link href="https://bookshelf.janosilles.com#${slugify(book.title)}"/>
    <updated>${book.read}</updated>
    <summary type="html"><![CDATA[ Janos finished reading <b>${book.title}</b> by <i>${book.author}</i> ]]></summary>
  </entry>`);

const atomfeed = `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  ${header}
  ${entries.join("")}
</feed>`.trim();


export async function GET() {
  return new Response(atomfeed);
}
