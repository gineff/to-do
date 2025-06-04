export type Filter = 'all' | 'active' | 'completed';

export interface TodoState {
  filter: Filter;
  loading: boolean;
  error: string | null;
  list: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type { TodoAction } from './actions';
