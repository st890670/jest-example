import { reducer } from "../index";

export const workInProgressSelector = (state: ReturnType<typeof reducer>) =>
  state.todo.workInProgress;
export const finishedSelector = (state: ReturnType<typeof reducer>) =>
  state.todo.finished;

export default { workInProgressSelector, finishedSelector };
