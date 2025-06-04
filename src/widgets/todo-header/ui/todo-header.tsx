import { ToggleAllButton } from './toggle-all-button';
import { CreateTodoForm } from './create-todo-form';
import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { createTodoThunk, toggleAllTodosThunk } from '@/entities/todo/model/thunks';

export const TodoHeaderWidget = () => {
  const dispatch = useDispatch();

  const onCreateTodo = (title: string) => {
    dispatch(createTodoThunk(title));
  };

  const onToggleAll = () => {
    dispatch(toggleAllTodosThunk());
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-white shadow rounded-xl gap-4">
      <ToggleAllButton onClick={onToggleAll} />
      <CreateTodoForm onSubmit={onCreateTodo} />
    </div>
  );
};
