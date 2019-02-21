// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.indexOf('Note 3')) // prints 2
// console.log(notes.indexOf('Note 6')) // prints -1 since it doesnt exists <= IMPORTANT

const notes = [{}, {
    title: 'My next trip',
    body: 'I\'m going to Iceland'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eat better'

}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]

console.log(notes)
console.log(notes.indexOf({}))

/* -------- IMPORTANT ----------------------- */
console.log(notes.indexOf({})) // -1
console.log({} === {}) //false

//When comparing 2 objects, it doesnt matter if they hold same set of properties
//and the same property values, DOES NOT make 2 objects equal

// What makes 2 objects equal is that they're exact same object in memory
let someObj = {}
let otherObj = someObj
console.log(someObj === otherObj) //true


//=====================================================
// We cant use indexOf() for objects, (or arrays) since it gives -1
// Since it === compares an obj with another obj

// So, we use `findIndex()` returns the index of first element in the arr 
// that satisfies the provides testing function

const index = notes.findIndex(function (item, index) {
    // console.log('item', item)
    return item.title === 'Habits to work on'
})

console.log('index', index) // 2

console.log('here', (2).toString())