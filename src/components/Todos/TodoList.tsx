import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from './Todos';

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }: any) => {
  return (
    <div className='max-w-md mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold text-white text-center'>Todo List</h2>
      </div>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
