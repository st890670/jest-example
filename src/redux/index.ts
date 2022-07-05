import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import todoReduce from "./slice/todo";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    todo: todoReduce,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const useDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> =
  useReduxSelector;