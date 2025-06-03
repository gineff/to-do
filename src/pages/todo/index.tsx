import { selectTodoLoading, selectTodoError, selectTodoAll } from '@/entities/todo/model/selectors';
import { fetchTodos } from '@/entities/todo/model/thunks/fetchTodos';
import type { Todo } from '@/entities/todo/model/types';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Spinner } from '@/shared/ui/spinner';
import { useEffect } from 'react';

export const TodoPage = () => {
  const dispatch = useThunkDispatch();

  const loading = useSelector(selectTodoLoading);
  const error = useSelector(selectTodoError);
  const todos = useSelector(selectTodoAll);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Ошибка: {error}</div>;

  return <div>{todos.map((todo: Todo) => todo.title).join(', ')}</div>;
};
