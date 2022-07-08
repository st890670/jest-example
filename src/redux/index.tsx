import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import todoReduce from "./slices/todo";
import rootSaga from "./sagas";
import React from "react";

const sagaMiddleware = createSagaMiddleware();

export const reducer = combineReducers({
  todo: todoReduce,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export const useDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> =
  useReduxSelector;
