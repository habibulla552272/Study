import React, { useContext } from 'react';
import Todo from './Todo';
import TodoContext from '../contexts/Todoscontext';

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) throw new Error('TodoContext is missing.');

  const { todos } = todoContext;

  return (
    <div className="mt-4">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
