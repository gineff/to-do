import type { TodoState, TodoAction } from '@/entities/todo/model/types';

export type RootState = {
  todo: TodoState;
};

export type RootAction = TodoAction; // | OtherAction | AnotherAction

export type ReducersMapObject<S, A> = {
  [K in keyof S]: (state: S[K], action: A) => S[K];
};

export type Middleware<S, A> = (
  store: MiddlewareAPI<S, A>,
) => (next: Dispatch<A>) => (action: A) => unknown;

export type Dispatch<A> = (action: A) => void;

export interface MiddlewareAPI<S, A> {
  getState: () => S;
  dispatch: Dispatch<A>;
}
