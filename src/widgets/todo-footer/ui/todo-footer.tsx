import { TodoCounter } from './todo-counter';
import { TodoFilter } from './todo-filter';
import { ClearCompletedButton } from './clear-completed-button';
import type { Filter } from '@/widgets/model/types';
import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { setFilter } from '@/entities/todo/model/actions';
import { useSelector } from '@/shared/lib/store/use-selector';
import { selectTodosFilter, selectTodoActive } from '@/entities/todo/model/selectors';
import { deleteCompletedTodosThunk } from '@/entities/todo/model/thunks';

export const TodoFooterWidget = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectTodosFilter);
  const activeTodos = useSelector(selectTodoActive);
  const activeCount = activeTodos.length;

  const handleFilterChange = (filter: Filter) => {
    dispatch(setFilter(filter));
  };

  const onClearCompleted = () => {
    dispatch(deleteCompletedTodosThunk());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded shadow-sm gap-4 flex-wrap">
      <TodoCounter activeCount={activeCount} />
      <TodoFilter currentFilter={currentFilter} onChange={handleFilterChange} />
      <ClearCompletedButton onClear={onClearCompleted} />
    </div>
  );
};
