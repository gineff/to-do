import type { Todo } from '@/entities/todo/model/types';
import { STORAGE_KEY } from '../config';

export const loadTodosFromStorage = async (): Promise<Todo[]> => {
  await new Promise((res) => setTimeout(res, 700));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveTodosToStorage = async (todos: Todo[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {}
};
