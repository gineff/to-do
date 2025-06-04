import type { FC } from 'react';
import type { Todo } from '@/entities/todo/model/types';
import { TodoItem } from '@/entities/todo/ui/todo-item';

interface TodoListWidgetProps {
  todos: Todo[];
}
export const TodoListWidget: FC<TodoListWidgetProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
