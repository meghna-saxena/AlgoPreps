const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title

        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

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

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

