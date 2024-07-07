import { createSlice } from "@reduxjs/toolkit";
import { statusFilterInitialState } from "./initialState";

const statusFilterSlice = createSlice({
  name: 'filters',
  initialState: statusFilterInitialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload
    }
  }
})

export const statusFilterReducer = statusFilterSlice.reducer;
export const { setStatusFilter } = statusFilterSlice.actions;