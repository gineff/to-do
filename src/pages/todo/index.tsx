import { selectTodoLoading, selectTodoError, selectTodoAll } from '@/entities/todo/model/selectors';
import { fetchAllTodos } from '@/entities/todo/model/thunks';
import type { Todo } from '@/entities/todo/model/types';
import { TodoItem } from '@/entities/todo/ui/todo-item';
import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { useSelector } from '@/shared/lib/store/use-selector';
import { Spinner } from '@/shared/ui/spinner';
import { useEffect } from 'react';

export const TodoPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectTodoLoading);
  const error = useSelector(selectTodoError);
  const todos = useSelector(selectTodoAll);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="w-full">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
