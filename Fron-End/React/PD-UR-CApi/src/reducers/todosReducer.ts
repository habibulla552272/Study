import getNextTodoId from '../utilitis/getNextTodoId';
import type { TodoType } from '../data/initialData';

type TodoAction =
  | { type: 'change'; todo: TodoType }
  | { type: 'delete'; id: number }
  | { type: 'add'; title: string };

export default function todoReducer(todos: TodoType[], action: TodoAction): TodoType[] {


  switch (action.type) {
    case 'change':
      return todos.map((t) =>
        t.id === action.todo.id
          ? { ...t, title: action.todo.title, done: action.todo.done }
          : t
      );

    case 'delete':
      return todos.filter((todo) => todo.id !== action.id);

    case 'add':
      return [
        ...todos,
        {
          id: getNextTodoId(todos),
          title: action.title,
          done: false,
        },
      ];

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
