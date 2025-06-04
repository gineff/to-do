import { selectTodoLoading, selectTodoError, selectTodoAll } from '@/entities/todo/model/selectors';
import { fetchAllTodos } from '@/entities/todo/model/thunks';
import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { useSelector } from '@/shared/lib/store/use-selector';
import { Spinner } from '@/shared/ui/spinner';
import { TodoHeaderWidget } from '@/widgets/todo-header/ui/todo-header';
import { TodoListWidget } from '@/widgets/todo-list/todo-list';
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
      <h1 className="text-2xl font-bold mb-4">Список дел</h1>
      <TodoHeaderWidget />
      <TodoListWidget todos={todos} />
    </div>
  );
};
