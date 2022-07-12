import { expectSaga, testSaga } from "redux-saga-test-plan";
import { createAction } from "@reduxjs/toolkit";
import { addToWorkInProgressListSaga } from "./todoSaga";
import { updateWorkInProgressList } from "../slices/todo";
import { workInProgressSelector } from "../selectors/todoSelector";

describe("TodoSaga Unit Test", () => {
  it("should add to work in progress list saga work fine", () => {
    const action = createAction<Item>("item");
    const item = action({ id: "1", text: "Hello World!" });

    // TODO: expectSaga應該不屬於單元測試，可以試著改用testSaga
    expectSaga(addToWorkInProgressListSaga, item)
      .withState({ todo: { workInProgress: [], finished: [] } })
      .run();

    // testSaga(addToWorkInProgressListSaga, item)
    //   .next()
    //   .select(workInProgressSelector);
  });
});

export {};
