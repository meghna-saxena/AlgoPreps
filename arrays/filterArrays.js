// findIndex() and find() helps with finding the first item matching certain condition
// we know how to find a specific item from a list

// Filtering
// take an existing array and make a new array with some items matching certain conditions

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

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes, 'work'))


/* ================== CHALLENGE =================== */

const todos = [
    {
        text: 'Read',
        completed: false
    }, {
        text: 'Cook',
        completed: false
    }, {
        text: 'Bathe',
        completed: true
    }, {
        text: 'Take care of Raj',
        completed: true
    },
    {
        text: 'Code',
        completed: true
    }
]

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed //false
    })
}

console.log('getThingsToDo', getThingsToDo(todos))