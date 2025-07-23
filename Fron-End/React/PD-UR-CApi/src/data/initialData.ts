export interface TodoType {
  id: number;
  title: string;
  done: boolean;
}

export const initialTodos: TodoType[] = [
  { id: 1, title: 'learn Html', done: true },
  { id: 2, title: 'learn JS', done: true },
  { id: 3, title: 'learn React', done: false },
];
