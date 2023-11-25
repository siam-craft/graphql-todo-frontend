'use client';
import React, { useEffect, useState } from 'react';

import { Button } from 'keep-react';
import { useMutation, useQuery } from 'urql';

import { TodosQuery } from '@/graphql/todo/queries';
import {
  CREATE_TODO_MUTATION,
  DELETE_TODO_MUTATION,
  UPDATE_TODO_MUTATION,
} from '@/graphql/todo/mutations';

import TodoList from './TodoList';
import TodoModal from './TodoModal';
import { formatTodo } from '@/utils/formatTodo';
import { formatTodos } from '@/utils/formatTodos';

export interface Todo {
  id: string;
  title: string;
}

export interface X {
  id: string;
  attributes: {
    title: string;
  };
}

const Todos = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [editState, setEditState] = useState<boolean>(false);
  const [editId, setEditId] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = async (title: string) => {
    try {
      const res = await createTodo({ title });
      const formattedTodo = formatTodo(res.data.createTodo.data);
      setTodos([...todos, formattedTodo]);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleUpdateTodo = async (todoId: any, newTitle: string) => {
    try {
      const res = await updateTodo({ id: todoId, title: newTitle });
      const updatedTodo = formatTodo(res.data.updateTodo.data);
      console.log(updatedTodo, 'updatedTodo');
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalShow = () => {
    setShowModal(!showModal);
  };

  const handleDeleteTodo = async (todoId: any) => {
    try {
      const res = await deleteTodo({ id: Number(todoId) });
      console.log(res.data.deleteTodo.data, 'res');
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTodo = (todoId: any) => {
    setShowModal(!showModal);
    setEditState(true);
    setEditId(todoId);
  };

  const addOpenModal = () => {
    handleModalShow();
    setEditState(false);
    setTitle('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!editState) {
      console.log('subimit add');
      handleAddTodo(title);
    } else {
      console.log('submit edit');
      handleUpdateTodo(editId, title);
    }
    setTitle('');
    setShowModal(!showModal);
  };

  const [createTodoResult, createTodo] = useMutation(CREATE_TODO_MUTATION);
  const [deleteTodoResult, deleteTodo] = useMutation(DELETE_TODO_MUTATION);
  const [updateTodoResult, updateTodo] = useMutation(UPDATE_TODO_MUTATION);
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;

  useEffect(() => {
    if (!fetching) {
      const formattedTodos = formatTodos(data.todos.data);
      setTodos(formattedTodos);
    }
  }, [data]);

  return (
    <section className='md:py-3 py-1 px-2.5'>
      <div className='flex justify-between items-center md:mb-5 mb-2'>
        <h1 className='md:text-8xl text-4xl '>Todos</h1>
        <Button onClick={addOpenModal} size='sm' type='primary'>
          Add Todo
        </Button>
      </div>
      <TodoModal
        editState={editState}
        handleModalShow={handleModalShow}
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        showModal={showModal}
        title={title}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </section>
  );
};

export default Todos;
