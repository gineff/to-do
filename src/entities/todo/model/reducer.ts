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
    case 'todo/ADD_TODO':
      return {
        ...state,
        list: [...state.list,   createTodoItem(action.payload)],
      };
    case 'todo/TOGGLE_TODO':
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case 'todo/TOGGLE_ALL_TODO':
      const allCompleted = state.list.every((todo) => todo.completed);
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.completed === allCompleted ? { ...todo, completed: !allCompleted } : todo,
        ),
      };
    case 'todo/CLEAR_COMPLETED_TODO':
      return {
        ...state,
        list: state.list.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
