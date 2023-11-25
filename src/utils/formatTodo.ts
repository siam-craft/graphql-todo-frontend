import { Todo, X } from '@/components/Todos/Todos';

export const formatTodo = (data: X): Todo => {
  const id = data.id;
  const title = data.attributes.title;
  return {
    id,
    title,
  };
};
