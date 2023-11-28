import React, { useState } from 'react';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    console.log(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
