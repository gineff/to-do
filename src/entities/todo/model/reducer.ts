import type { TodoState, TodoAction } from './types';
import { createTodoItem } from '../lib/create-todo-item';

export const initialState: TodoState = {
  loading: false,
  error: null,
  list: [],
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'todo/LOADING':
      return { ...state, loading: action.payload, error: null };
    case 'todo/SET_TODOS':
      return { ...state, loading: false, list: action.payload, error: null };
    case 'todo/ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'todo/CLEAR_COMPLETED_TODO':
      return {
        ...state,
        list: state.list.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
