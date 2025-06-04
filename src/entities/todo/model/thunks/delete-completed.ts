import type { Dispatch } from 'react';
import { setLoading, setError, setTodos } from '../actions';
import { saveTodosToStorage } from '@/shared/lib/storage';
import type { Todo } from '../types';

export const deleteCompletedTodosThunk =
  () => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().todo;

      const updatedTodos = list.filter((todo: Todo) => !todo.completed);
      await saveTodosToStorage(updatedTodos);

      dispatch(setTodos(updatedTodos));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при удалении из хранилища'));
    } finally {
      dispatch(setLoading(false));
    }
  };
