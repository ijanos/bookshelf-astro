---
layout: '../layouts/About.astro'
---
# About

This website is where I keep track of what I read, and I use the term "book"
broadly. It could be a comic, a collection of short stories, a single short
story, or even an online blog post. Having a public list helps me easily check
my reading history from anywhere.

I've tracked my reading habits in many places. goodreads, LibraryThing, Google
Keep, Google Spreadsheets, Trello, Notion and even local text files but none of
them felt right. This custom-built version is my latest and most comprehensive
attempt.

I've finished most books on the list, only exceptions being ones I stopped but
found interesting enough to include. I don't list works I cannot remember at
all. For example, I've read many science fiction magazines in high-school but I
didn't go back and add every story from them to this list. There are a couple
memorable stories I looked up and put here.

## Timestamps

I track when I finish a book. At one point I marked the date I began as well
but I dropped that habit. I don't consider starting a book as significant as
finishing it. Having the beginning date would allow me to calculate how much
time it took to read a book, but I don't think that is a useful metric for me,
there are many outside factors that change how much time I have to read in a
day, week or month.

I started tracking when I finished a book in around 2015. Consistently doing it
since 2018. For books I've read before that I had to make some educated
guesses. Some books were ordered online, and I used the receipt date from my
email inbox as the read date. Not accurate but helps with creating a correct
reading order. This is the reason why some books share the same read date. I
ordered them at the same time. For some books I remember I bought them as soon
as they were released in Hungary so I put their publication year there. I found
some titles in my chat history with friends, discussing a book and I used chat
timestamps to fill the read date.

## Titles

I'll list the titles in English most of the time but sometimes in the original
language. No hard rules here, the page is in English, nowadays I mostly read in
English, it makes sense to use English titles. This is not a strict database of
books.

## "Hidden" metadata.

I haven't found a good database for book length. "Pages" is a common metric,
but it makes sense for one edition of one book. I want to track at least some
sense of length for them, so in the raw data I track "pages" found in goodreads
or google books but this is not currently listed on the site.

Similarly I track "tags" for each book. It can be found in the source code but
not in the public page. I use these tags to mark the books I didn't finish.

## Technology

My reading history is in a JSON file. It was originally created by a small
script that combined my LibraryThing and goodreads exports, now it is hand
edited. I use VSCode to edit the file, with the help of a JSON Schema the
editor will mark errors.

The page is built with [Astro](https://astro.build/) and [tailwind
CSS](https://tailwindcss.com/). Search and sorting is powered by
[Alpine.js](https://alpinejs.dev/), hosted on [Cloudflare
Pages](https://pages.cloudflare.com/).

If you want to follow my reading through a Feed reader you can! [Follow this
feed](/atom.xml).

Favicon is genereated by https://favicon.io/ from an emoji.

Background image is from
[Unsplash](https://unsplash.com/photos/books-on-brown-wooden-shelf-P8gLaJ-PZL0)

Send me any feedback to bookshelf@janosilles.com
