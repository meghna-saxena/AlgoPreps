const todos = [{
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
}]

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
