import type { TodoState, TodoAction } from './types';

export const initialState: TodoState = {
  filter: 'all',
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
    case 'todo/SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
