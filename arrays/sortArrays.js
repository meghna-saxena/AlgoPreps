//Array.prototype.sort()

// The sort method doesnt require a func as the first argument though it can take one.
// Sort things alphabetically

// Sort method doesnt work with array of objects, it will do nothing on it. Therefore sort takes a fucnt where we can specify the exact comparison behavior, the sprt order

// arr.sort([compareFunction]) anything in square bracket passed as argument is `optional`

// console.log('H' < 'a') -> true

// '<' means before and '>' means after
// Capital letters comes first in unicode


/* ====================== IMPORTANT ==================== */
// Therefore to compare any string, first make it case-insensitive by lowercasing all of the letters.

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

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 //before
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1 //after
        } else {
            return 0 //equal
        }
    })
}

sortNotes(notes)
// console.log(notes)  -> H < M < E
// [ { title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.' },
//   { title: 'My next trip', body: 'I would like to go to Spain' },
//   { title: 'Office modification', body: 'Get a new seat' } ]

/* ===================== CHALLENGE ================= */


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

const sortToDos = function (todos) {
    todos.sort(function (a, b) { // -1 if a comes first, 1 if b comes first and 0 if both are equal
        if (!a.completed && b.completed) {
            return -1
        } else {
            return 1
        }
    })
}

sortToDos(todos)
// console.log(todos)


// let someObject = {Name:'Raj'};
// let otherObject = {Name:'Raj'};
// console.log(someObject === otherObject); //false 


// let someObject = {Name:'Raj'};
// let otherObject = someObject;
// console.log(someObject === otherObject); //true

// You can't use the equality operator on objects as it compares their references and not their content 
// so two objects will never be equal unless they refer to the same object.

// It depends what you want to check as well. Do you want to see if they only have the same properties or the same properties and values. 
// What about nested objects? It gets quite complicated. The simplest check you can do is:

// JSON.stringify(someObject) === JSON.stringify(otherObject)
// However, this method has a flaw in that the order of properties in objects are not guaranteed.