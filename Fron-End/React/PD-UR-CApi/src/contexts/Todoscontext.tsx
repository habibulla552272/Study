import React, { createContext, useReducer } from 'react';
import { initialTodos, type TodoType } from '../data/initialData';
import todoReducer from '../reducers/todosReducer';

interface TodoContextType {
  todos: TodoType[];
  onAddTodo: (title: string) => void;
  onChangeTodo: (todo: TodoType) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);
export default TodoContext;

export const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAddTodo = (title: string) => {
    dispatch({ type: 'add', title });
  };

  const handleChangeTodo = (updatedTodo: TodoType) => {
    dispatch({ type: 'change', todo: updatedTodo });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: 'delete', id });
  };

  return (
    <TodoContext
      value={{
        todos,
        onAddTodo: handleAddTodo,
        onChangeTodo: handleChangeTodo,
        onDeleteTodo: handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext>
  );
};
