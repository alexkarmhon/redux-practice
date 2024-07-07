import { createSlice, nanoid } from "@reduxjs/toolkit";
import { todosInitialState } from "./initialState";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    checkToggle: (state, action) => {
      state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    },
  },
})

export const todosReducer = todoSlice.reducer;
export const { createTodo, deleteTodo, checkToggle, getTodoText } = todoSlice.actions;