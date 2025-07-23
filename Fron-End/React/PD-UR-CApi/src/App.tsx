import './App.css';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import { TodosContextProvider } from './contexts/Todoscontext';

function App() {
  return (
    <section className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>

      {/* Provide Todos Context */}
      <TodosContextProvider>
        <AddTodo />
        <TodoList />
      </TodosContextProvider>
    </section>
  );
}

export default App;
