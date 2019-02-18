const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(`You have ${notes.length} notes`)
// console.log(`Last note: ${[notes.length - 1]}`)
// console.log(`Second last note: ${notes[notes.length - 2]}`)

/* CAN STORE THE REMOVED ITEM IN A VARIABLE */ 
const removedItem = notes.pop() //removes last item
notes.push('My new note') //adds new item in the end


notes.shift() //removes an item from beginning
notes.unshift('First note') //adds item in beginning

/* MANIPULATE ARRAY FROM THE MODDLE */
// Array.prototype.splice()

notes.splice(1, 1) //remove item from index 1 and remove only one item, so removes 'Note 2'

notes.splice(1, 0, 'This is new second item') 
// goes to index 1, doesnt delete anything, adds string at index 1, and now 'Note 2' comes at index 2

notes.splice(1, 1, 'This is new second item') 
// start at index 1, delete it, and then add the new string

// Assigning value by bracket notation

notes[2] = 'This is new assigned value'

// =====================================
/* CHALLENGE */
// ======================================

const todos = ['buy food', 'cook dinner', 'study', 'read book', 'eat medicine']

// Delete the 3rd item
console.log(todos.splice(2, 1)) // ['study']

// Add a new item in the end
console.log(todos.push('new item'))

// remove the first item from the list
console.log(todos.shift()) //buy food