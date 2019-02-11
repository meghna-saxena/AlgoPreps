let currentBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let nextBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let currentBookSummary = getSummary(currentBook)
let nextBookSummary = getSummary(nextBook)

console.log(currentBookSummary.pageCountSummary)