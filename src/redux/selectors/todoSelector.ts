import { reducer } from "../index";

export const todoSelector = (state: ReturnType<typeof reducer>) => state.todo;

export default todoSelector;
