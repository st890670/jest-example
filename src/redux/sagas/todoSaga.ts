import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeLatest } from "redux-saga/effects";

import {
  addToWorkInProcessList as addToWorkInProgressList,
  updateWorkInProgressList,
  markAsFinished,
  updateFinishedList,
} from "../slices/todo";

import {
  workInProgressSelector,
  finishedSelector,
} from "../selectors/todoSelector";

export function* addToWorkInProgressListSaga(action: PayloadAction<Item>) {
  const prevList: Array<Item> = yield select(workInProgressSelector);

  const newItem = action.payload;

  const clone = [...prevList];
  clone.push(newItem);
  yield put(updateWorkInProgressList(clone));
}

function* markAsFinishedSaga(action: PayloadAction<string>) {
  const targetIndex = action.payload;
  const workInProgress: Array<Item> = yield select(workInProgressSelector);
  const item = workInProgress.find(
    (rowData: Item) => rowData.id === targetIndex
  ) as Item;

  yield put(
    updateWorkInProgressList(
      workInProgress.filter((rowData: Item) => rowData.id !== targetIndex)
    )
  );
  const finished: Array<Item> = yield select(finishedSelector);

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
