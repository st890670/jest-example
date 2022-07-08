import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeLatest } from "redux-saga/effects";

import {
  addToWorkInProcessList as addToWorkInProgressList,
  updateWorkInProgressList,
  markAsFinished,
  updateFinishedList,
} from "../slices/todo";

import { todoSelector } from "../selectors/todoSelector";

export function* addToWorkInProgressListSaga(action: PayloadAction<Item>) {
  const { workInProcess: prevList } = yield select(todoSelector);

  const newItem = action.payload;
  const clone = [...prevList];
  clone.push(newItem);

  yield put(updateWorkInProgressList(clone));
}

function* markAsFinishedSaga(action: PayloadAction<string>) {
  const targetIndex = action.payload;
  const { workInProcess, finished } = yield select(todoSelector);
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

function* watchAddToWorkInProgressList() {
  yield takeLatest(addToWorkInProgressList, addToWorkInProgressListSaga);
}

function* watchMarkAsFinished() {
  yield takeLatest(markAsFinished, markAsFinishedSaga);
}

const all = [watchAddToWorkInProgressList(), watchMarkAsFinished()];

export default all;
