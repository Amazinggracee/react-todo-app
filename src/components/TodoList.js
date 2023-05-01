import React, { useState, useEffect } from "react";
import TodoForm from "./Form";
import TodoItem from "./Delete";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
      <TodoForm />
      <TodoItem />
    </div>
  );
}

export default TodoList;