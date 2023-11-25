import { X } from '@/components/Todos/Todos';

export const formatTodos = (todos: X[]) => {
  return todos.map((todo: X) => {
    return {
      id: todo.id,
      title: todo.attributes.title,
    };
  });
};
