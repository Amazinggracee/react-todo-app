import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, deleteTodo } = props;

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="delete">
      <p>{todo.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
