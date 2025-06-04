import { generateUUID } from '@/shared/lib';
import type { Todo } from '../model/types';

export const createTodoItem = (title: string): Todo => ({
  id: generateUUID(),
  title,
  completed: false,
});
