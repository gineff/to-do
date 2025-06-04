import type { Dispatch } from 'react';
import { setLoading, setError, setTodos } from '../actions';
import { loadTodosFromStorage } from '@/shared/lib/storage';

export const fetchAllTodos = () => async (dispatch: Dispatch<RootAction>) => {
  dispatch(setLoading(true));
  try {
    const todos = await loadTodosFromStorage();
    dispatch(setTodos(todos));
  } catch (error) {
    dispatch(setError((error as Error).message || 'Ошибка загрузки из хранилища'));
  } finally {
    dispatch(setLoading(false));
  }
};
