const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

/** 
 * HANDLING FORM
 * 1. Create a form with a single input for todo text
 * 2. Setup a submit handler and cancel the default action
 * 3. Add a new item to the todos array with the text data (completed value of false)
 * 4. Rerender the application
 * 5. Clear the input field value 
 */

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

/**
 * CHECKBOX
 * 1. Create a checkbox and setup event listener -> "Hide completed"
 * 2. Create new hideCompleted filter (default false)
 * 3. Update hideCompleted and rerender list on chekbox changes
 * 4. Setup renderTodos to remove completed items.
 */
