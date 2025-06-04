import { useState, type FC } from 'react';
import type { Todo } from '../model/types';
import { useDispatch } from '../../../shared/lib/store/use-dispatch';
import { updateTodo, deleteTodo } from '../model/thunks';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (title.trim() === '') {
      handleDelete()
    } else {
      dispatch(updateTodo({ ...todo, title }));
    }
    setIsEditing(false);
  };

  const handleBlur = () => {
    handleSave();
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
    if (e.key === 'Escape') {
      setTitle(todo.title);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center justify-between w-full p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="form-checkbox h-6 w-6 text-blue-500 rounded focus:ring-blue-400"
        />
        {isEditing ? (
          <input
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        ) : (
          <span
            onDoubleClick={handleEdit}
            className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} cursor-pointer select-none`}
          >
            {todo.title}
          </span>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="cursor-pointer opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 px-3 py-1.5 rounded-full transition-all duration-200 transform hover:scale-110 text-2xl font-light"
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
};
