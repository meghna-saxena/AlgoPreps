const notes = ['Note 1', 'Note 2', 'Note 3']

notes.forEach(function (item, index) { //The function which is passed into another func is k/a callback func
    const num = index + 1
    console.log(`${num}. ${item}`)
})

// 1. Note 1
// 2. Note 2
// 3. Note 3

//count++ === count = count + 1
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 2; count >= 0; count--) {
    console.log(count)
}

// off-by-one error, since notes.length = 3, but last index no is 2, or index starts with 0
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count]) //Note 1 Note 2 Note 3
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]) // Note 3 Note 2 Note 1
}

for (let count = 0; count < notes.length; count++) {
    const num = count + 1 // since count start with 1, make count + 1
    console.log(`${num}. ${notes[count]}`) //Note 1 Note 2 Note 3
}

