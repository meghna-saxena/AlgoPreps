// const todos = ['Read', 'Cook', 'Bathe', 'Take care of Raj']

// 1. Convert array to array of objects -> text, completed
// 2. Create a function to remove a todo by text value

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

const deleteToDo = function (todos, text) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if (index > -1) {
        return todos.splice(index, 1)
    }
}

deleteToDo(todos, 'code')
console.log(todos)
