/**
 * findIndex() returns the index of the first element matching certain condition
 * find() method returns the value of the first element in the array that satisfies
 * the provided testing function
 */

/* Array and Objects are passed by reference */

// search arrays by indexOf or findIndex
// indexof always checks with strict equality operator, '==='
// indexOf cant be used for arrays and objects since it evaluates a value and returns its index
// findIndex allows us to compare two things by accepting a function/predicate

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'sads office modification')
console.log(note)

