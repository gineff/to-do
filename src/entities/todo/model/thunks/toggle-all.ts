import type { Dispatch } from 'react';
import { setLoading, setError, setTodos } from '../actions';
import { saveTodosToStorage } from '@/shared/lib/storage';
import type { Todo } from '../types';

export const toggleAllTodosThunk =
  () => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().todo;
      const allCompleted = list.every((todo: Todo) => todo.completed);
      const updatedTodos = list.map((todo: Todo) =>
        todo.completed === allCompleted ? { ...todo, completed: !allCompleted } : todo,
      );
      await saveTodosToStorage(updatedTodos);
      dispatch(setTodos(updatedTodos));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при сохранении в хранилище'));
    } finally {
      dispatch(setLoading(false));
    }
  };
