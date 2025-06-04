import type { Filter, Todo } from './types';

export const setLoading = (isLoading: boolean) => ({
  type: 'todo/LOADING' as const,
  payload: isLoading,
});

export const setTodos = (list: Todo[]) => ({ type: 'todo/SET_TODOS' as const, payload: list });

export const setError = (error: string) => ({ type: 'todo/ERROR' as const, payload: error });

export const setFilter = (filter: Filter) => ({
  type: 'todo/SET_FILTER' as const,
  payload: filter,
});

export type TodoAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setTodos>
  | ReturnType<typeof setError>
  | ReturnType<typeof setFilter>;
