const TodoItem = ({ todo, toggleTodo }) => {
  const handleClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={handleClick} style={{ marginLeft: '10px' }}>
        {todo.completed ? 'Desfazer' : 'Concluir'}
      </button>
    </li>
  );
};

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export { TodoList };
