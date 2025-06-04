import type { Todo } from './types';

export const selectTodoLoading = (state: RootState) => state.todo.loading;
export const selectTodoError = (state: RootState) => state.todo.error;
export const selectTodoAll = (state: RootState) => state.todo.list;
export const selectTodoActive = (state: RootState) =>
  state.todo.list.filter((todo: Todo) => !todo.completed);
export const selectTodoCompleted = (state: RootState) =>
  state.todo.list.filter((todo: Todo) => todo.completed);
export const selectTodosFilter = (state: RootState) => state.todo.filter;
export const selectTodoListFiltered = (state: RootState): Todo[] => {
  const filter = state.todo.filter;
  switch (filter) {
    case 'active':
      return state.todo.list.filter((todo: Todo) => !todo.completed);
    case 'completed':
      return state.todo.list.filter((todo: Todo) => todo.completed);
    default:
      return state.todo.list;
  }
};
