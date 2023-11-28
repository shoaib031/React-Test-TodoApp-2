import React from 'react';

const DeleteTodo = () => {
  const handleDeleteTodo = () => {
    console.log('Deleting todo');
  };

  return (
    <div>
      <button onClick={handleDeleteTodo}>Delete Todo</button>
    </div>
  );
};

export default DeleteTodo;
