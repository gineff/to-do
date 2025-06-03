import type { Todo } from './types';

export const setLoading = () => ({ type: 'todo/LOADING' as const });

export const setTodos = (list: Todo[]) => ({ type: 'todo/SUCCESS' as const, payload: list });

export const setError = (error: string) => ({ type: 'todo/ERROR' as const, payload: error });

export const addTodo = (title: string) => ({ type: 'todo/ADD_TODO' as const, payload: title });

export const deleteTodo = (id: string) => ({ type: 'todo/DELETE_TODO' as const, payload: id });

export const editTodo = (id: string, title: string) => ({
  type: 'todo/EDIT_TODO' as const,
  payload: { id, title },
});
export const toggleTodo = (id: string) => ({ type: 'todo/TOGGLE_TODO' as const, payload: id });

export const toggleAll = () => ({ type: 'todo/TOGGLE_ALL' as const });

export const clearCompleted = () => ({ type: 'todo/CLEAR_COMPLETED' as const });

export type TodoAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setTodos>
  | ReturnType<typeof setError>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof toggleAll>
  | ReturnType<typeof clearCompleted>;
