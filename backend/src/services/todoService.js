export function validateTodo(title) {
  if (!title || title.length < 3) {
    throw new Error("Title must be at least 3 characters");
  }
  return true;
}