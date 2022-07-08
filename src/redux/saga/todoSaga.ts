import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeLatest } from "redux-saga/effects";

import {
  addToWorkInProcessList,
  updateWorkInProgressList,
  markAsFinished,
  updateFinishedList,
} from "../slice/todo";

function* addToWorkInProcessListSaga(action: PayloadAction<Item>) {
  const prevList: Array<Item> = yield select(
    (state) => state.todo.workInProcess
  );

  const newItem = action.payload;
  const clone = [...prevList];
  clone.push(newItem);

  yield put(updateWorkInProgressList(clone));
}

function* markAsFinishedSaga(action: PayloadAction<string>) {
  const targetIndex = action.payload;
  const { workInProcess, finished } = yield select((state) => state.todo);
  const item = workInProcess.find(
    (rowData: Item) => rowData.id === targetIndex
  );

  yield put(
    updateWorkInProgressList(
      workInProcess.filter((rowData: Item) => rowData.id !== targetIndex)
    )
  );

  yield put(updateFinishedList([...finished, item]));
}

function* watchAddToWorkInProcessList() {
  yield takeLatest(addToWorkInProcessList, addToWorkInProcessListSaga);
}

function* watchMarkAsFinished() {
  yield takeLatest(markAsFinished, markAsFinishedSaga);
}

const all = [watchAddToWorkInProcessList(), watchMarkAsFinished()];

export default all;
