function TodoItem({ todo, deleteTodo }) {
  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;