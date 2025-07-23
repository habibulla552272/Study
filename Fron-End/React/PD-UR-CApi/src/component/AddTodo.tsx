import React, { useContext, useState } from 'react';
import TodoContext from '../contexts/Todoscontext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const todoContext = useContext(TodoContext);
  if (!todoContext) throw new Error('TodoContext is missing.');

  const { onAddTodo } = todoContext;

  const handleAdd = () => {
    if (title.trim() === '') return;
    onAddTodo(title);
    setTitle('');
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 px-3 py-2 rounded outline-none flex-1"
        type="text"
        placeholder="Enter a new todo"
      />
      <button
        onClick={handleAdd}
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
