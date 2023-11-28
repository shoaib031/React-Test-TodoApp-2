import React from 'react';

const UpdateTodo = () => {
  const handleUpdateTodo = () => {
    console.log('Updating todo');
  };

  return (
    <div>
      <button onClick={handleUpdateTodo}>Update Todo</button>
    </div>
  );
};

export default UpdateTodo;
