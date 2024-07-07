import { createSlice } from "@reduxjs/toolkit";
import { counterInitialState } from "./initialState";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state, action) => {
      state.total += action.payload
    },
    decrement: (state, action) => {
      state.total -= action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload
    },
    reset: (state) => {
      state.total = 0;
      state.step = 1;
    }
  }
})

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, setStep, reset } = counterSlice.actions;