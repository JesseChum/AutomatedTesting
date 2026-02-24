// Simple in-memory "database"
let todos = [];

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  todos.push(todo);
  return todo;
}

export function clearTodos() {
  todos = [];
}