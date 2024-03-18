import { useState } from 'react';

import Todo from './components/Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar app",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Criar lista de estudo",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  </div>;
}

export default App;