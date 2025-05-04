import { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn JS', completed: true },
  ]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 className="titulo">Todo List</h1>
      <p>Versão inicial da aplicação de lista de tarefas para a disciplina SPODWE2</p>
      <ul id="filtros">
        <li>
          <a
            href="#"
            data-filtro="all"
            onClick={(e) => { e.preventDefault(); setFilter('all'); }}
            className={filter === 'all' ? 'ativo' : ''}
          >
            Todos os itens
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filtro="completed"
            onClick={(e) => { e.preventDefault(); setFilter('completed'); }}
            className={filter === 'completed' ? 'ativo' : ''}
          >
            Concluídos
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filtro="pending"
            onClick={(e) => { e.preventDefault(); setFilter('pending'); }}
            className={filter === 'pending' ? 'ativo' : ''}
          >
            Pendentes
          </a>
        </li>
      </ul>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Adicione aqui sua nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
