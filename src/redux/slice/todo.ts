import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  text: string;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
   workInProcess : [] as Array<Item>,
   finished: [] as Array<Item>
  },
  reducers: {
    addToWorkInProcessList(state, action: PayloadAction<Item>) {
      const clone = [...state.workInProcess]
      clone.push(action.payload)
      return {
        ...state,
        workInProcess: clone
      }
    },
    markAsFinished(state, action: PayloadAction<string>){
      const item = state.workInProcess.find(rowData=> rowData.id === action.payload)
      const finishedListClone = [...state.finished]
      if(item){
        finishedListClone.push(item)
      }
      return {
        ...state,
        workInProcess: state.workInProcess.filter(rowData=> rowData.id !== action.payload),
        finished: finishedListClone
      }
    }
  },
});

export const { addToWorkInProcessList, markAsFinished } = todoSlice.actions;
export default todoSlice.reducer;
