import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddToDo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    RemoveToDo: (state, action) => {
      state.todos = state.todos.filter((r) => r.id !== action.payload);
    },
  },
});

export const { AddToDo, RemoveToDo } = todoSlice.actions;
export default todoSlice.reducer;
