import { testSaga } from "redux-saga-test-plan";
import { createAction } from "@reduxjs/toolkit";
import { addToWorkInProgressListSaga } from "./todoSaga";
import { updateWorkInProgressList } from "../slices/todo";
import { todoSelector } from "../selectors/todoSelector";

describe("TodoSaga Unit Test", () => {
  it("should add to work in progress list saga work fine", () => {
    const action = createAction<Item>("item");
    const item = action({ id: "1", text: "Hello World!" });
    testSaga(addToWorkInProgressListSaga, item)
      .next()
      .select(todoSelector)
      .next()
      .put(updateWorkInProgressList([]))
      .next()
      .isDone();
  });
});

export {};
