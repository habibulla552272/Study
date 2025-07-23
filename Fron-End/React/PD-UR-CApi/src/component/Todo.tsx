import React, { useContext, useState } from 'react';
import type { TodoType } from '../data/initialData';
import TodoContext from '../contexts/Todoscontext';

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const todoContext = useContext(TodoContext);
  if (!todoContext) throw new Error('TodoContext is missing.');

  const { onChangeTodo, onDeleteTodo } = todoContext;

  const handleSave = () => {
    if (title.trim() === '') return;
    onChangeTodo({ ...todo, title });
    setIsEditing(false);
  };

  const toggleDone = () => {
    onChangeTodo({ ...todo, done: !todo.done });
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={toggleDone}
        className="w-4 h-4"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-2 rounded-md"
          />
          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span className={todo.done ? 'line-through text-gray-400' : ''}>
            {todo.title}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
