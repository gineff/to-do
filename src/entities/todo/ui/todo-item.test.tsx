import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './todo-item';
import type { Todo } from '../model/types';
import { StoreProvider } from '@/app/store/index';

const renderWithStore = (todo: Todo) => {
  return render(
    <StoreProvider>
      <TodoItem todo={todo} />
    </StoreProvider>,
  );
};

describe('TodoItem', () => {
  const baseTodo: Todo = {
    id: '1',
    title: 'Test task',
    completed: false,
  };

  it('renders the todo title', () => {
    renderWithStore(baseTodo);
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('enters edit mode on double click', () => {
    renderWithStore(baseTodo);
    const text = screen.getByText('Test task');
    fireEvent.doubleClick(text);
    expect(screen.getByDisplayValue('Test task')).toBeInTheDocument();
  });

  it('cancels editing on Escape', () => {
    renderWithStore(baseTodo);
    fireEvent.doubleClick(screen.getByText('Test task'));
    const input = screen.getByDisplayValue('Test task');
    fireEvent.change(input, { target: { value: 'Temp change' } });
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });
});
