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

// document.querySelector('button').addEventListener('click', function (e) {
//     e.target.textContent = 'Clicked'
// })

// document.querySelectorAll('button')[1].addEventListener('click', function () {
//     console.log('delete all')
// })

document.querySelector('#create-note-btn').addEventListener('click', function (e) {
    e.target.textContent = 'Clicked'
})

document.querySelector('#remove-all-btn').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#reset-btn').addEventListener('click', function () {
    console.log('reset')
})