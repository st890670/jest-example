import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    workInProcess: [] as Array<Item>,
    finished: [] as Array<Item>,
  },
  reducers: {
    addToWorkInProcessList(_state, _action: PayloadAction<Item>) {},
    updateWorkInProgressList(state, action: PayloadAction<Array<Item>>) {
      const todoList = action.payload;
      return {
        ...state,
        workInProcess: todoList,
      };
    },
    markAsFinished(_state, _action: PayloadAction<string>) {},
    updateFinishedList(state, action: PayloadAction<Array<Item>>) {
      const todoList = action.payload;
      return {
        ...state,
        finished: todoList,
      };
    },
  },
});

export const {
  addToWorkInProcessList,
  updateWorkInProgressList,
  markAsFinished,
  updateFinishedList,
} = todoSlice.actions;
export default todoSlice.reducer;
