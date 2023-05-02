import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItems({ text }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>
  );
}

TodoItems.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TodoItems;
