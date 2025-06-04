import { useCallback, useMemo, useReducer, type Dispatch, type ReactNode } from 'react';
import { initialState } from './initial-state';
import { todoReducer } from '@/entities/todo/model/reducer';
import type { TodoState } from '@/entities/todo/model/types';
import type { Middleware, MiddlewareAPI, ReducersMapObject, RootAction } from './types';
import { StoreContext } from '@/shared/lib/store/context';

const compose = <S, A>(...middlewares: Middleware<S, A>[]) => {
  return (store: MiddlewareAPI<S, A>) => {
    const chain = middlewares.map((middleware) => middleware(store));
    return (next: Dispatch<A>) => chain.reduceRight((acc, middleware) => middleware(acc), next);
  };
};

const combineReducers =
  <S, A>(reducers: ReducersMapObject<S, A>) =>
  (state: S, action: A): S => {
    const newState = {} as S;
    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };

const thunk =
  <S, A>({ dispatch, getState }: MiddlewareAPI<S, A>) =>
  (next: Dispatch<A>) =>
  (action: any, ...args: unknown[]) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, ...args);
    }
    return next(action);
  };


interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const rootReducer = combineReducers<{ todo: TodoState }, RootAction>({
    todo: todoReducer,
  });

  const [state, originalDispatch] = useReducer(rootReducer, initialState);

  const getState = useCallback(() => state, [state]);

  const middlewareAPI: MiddlewareAPI<{ todo: TodoState }, RootAction> = {
    getState,
    dispatch: (action: RootAction) => enhancedDispatch(action),
  };

  const applyMiddleware = compose<{ todo: TodoState }, RootAction>(thunk);
  const enhancedDispatch = applyMiddleware(middlewareAPI)(originalDispatch);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch: enhancedDispatch,
    }),
    [state, enhancedDispatch],
  );

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};
