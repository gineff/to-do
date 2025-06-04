import type { Dispatch } from 'react';
import { setLoading, setError, setTodos } from '../actions';
import { saveTodosToStorage } from '@/shared/lib/storage';
import type { Todo } from '../types';

export const updateTodo =
  (todo: Todo) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().todo;
      const updatedTodos = list.map((t: Todo) => (t.id === todo.id ? todo : t));
      await saveTodosToStorage(updatedTodos);
      dispatch(setTodos(updatedTodos));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при удалении из хранилища'));
    } finally {
      dispatch(setLoading(false));
    }
  };
