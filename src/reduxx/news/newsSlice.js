import { createSlice } from "@reduxjs/toolkit";
import { newsInitialState } from "./initialState";
import { fetchNews } from "./thunk";
import { handleFulfilled, handlePending, handleRejected } from "./newsHandlers";

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, handlePending)
    builder.addCase(fetchNews.fulfilled, handleFulfilled)
    builder.addCase(fetchNews.rejected, handleRejected)
  }
})

export const newsReducer = newsSlice.reducer;