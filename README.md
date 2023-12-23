# Bookshelf

porting my bookshelf from 11ty to astro
https://github.com/ijanos/bookshelf


## notes

converting every `author` field to an array
```
.books.[].author |= if type != "array" then [.] else . end
```
