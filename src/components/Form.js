import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
