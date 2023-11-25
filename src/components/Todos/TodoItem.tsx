import React from 'react';

const TodoItem = ({ todo, handleEditTodo, handleDeleteTodo }: any) => {
  return (
    <div
      key={todo.id}
      className='flex justify-between items-center bg-white shadow px-4 py-2 mb-2 rounded'
    >
      <p className='text-gray-600'>{todo.title}</p>
      <div>
        <button
          type='button'
          onClick={() => handleEditTodo(todo.id)}
          className='px-2 py-1 text-white bg-green-500 rounded mr-2 hover:bg-green-600'
        >
          Edit
        </button>
        <button
          className='px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600'
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
