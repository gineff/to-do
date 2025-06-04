import type { Todo } from '@/entities/todo/model/types';
import { TodoItem } from '@/entities/todo/ui/todo-item';
import { selectTodoListFiltered } from '@/entities/todo/model/selectors';
import { useSelector } from '@/shared/lib/store/use-selector';

export const TodoListWidget = () => {
  const todos = useSelector(selectTodoListFiltered);

  return (
    <ul className="min-h-[24px]">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
