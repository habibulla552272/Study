
export default function getNextTodoId(todos: TodoType[]): number {
  if (todos.length === 0) return 1;

  const maxId = todos.reduce((maxId, todo) => {
    return Math.max(maxId, todo.id);
  }, 0);

  return maxId + 1;
}
