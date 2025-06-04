import type { Todo } from './types';

export const setLoading = (isLoading: boolean) => ({
  type: 'todo/LOADING' as const,
  payload: isLoading,
});

export const setTodos = (list: Todo[]) => ({ type: 'todo/SET_TODOS' as const, payload: list });

export const setError = (error: string) => ({ type: 'todo/ERROR' as const, payload: error });

export const addTodo = (title: string) => ({ type: 'todo/ADD_TODO' as const, payload: title });

export const toggleTodo = (id: string) => ({ type: 'todo/TOGGLE_TODO' as const, payload: id });

export const toggleAll = () => ({ type: 'todo/TOGGLE_ALL_TODO' as const });

export const clearCompleted = () => ({ type: 'todo/CLEAR_COMPLETED_TODO' as const });

export type TodoAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setTodos>
  | ReturnType<typeof setError>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof toggleAll>
  | ReturnType<typeof clearCompleted>;
