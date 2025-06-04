import type { Dispatch } from 'react';
import { setLoading, setError, setTodos } from '../actions';
import { saveTodosToStorage } from '@/shared/lib/storage';
import { createTodoItem } from '../../lib/create-todo-item';

export const createTodoThunk =
  (title: string) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().todo;
      const todo = createTodoItem(title);
      const updatedTodos = [...list, todo];
      await saveTodosToStorage(updatedTodos);
      dispatch(setTodos(updatedTodos));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при сохранении в хранилище'));
    } finally {
      dispatch(setLoading(false));
    }
  };
