// Display todos

function displayTodos() {
    console.log('My todos:', todos);
}

displayTodos();

// Add todos

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// Change todos

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

changeTodo(0, 'changed again')

// Delete todos

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(0)