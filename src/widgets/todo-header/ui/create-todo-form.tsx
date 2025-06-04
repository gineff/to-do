import { useState, type FC } from 'react';

interface CreateTodoFormProps {
  onSubmit: (title: string) => void;
}

export const CreateTodoForm: FC<CreateTodoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-1 justify-end">
      <input
        type="text"
        className="px-3 py-2 border rounded flex-1"
        placeholder="Add new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition h-10"
      >
        Add
      </button>
    </form>
  );
};
