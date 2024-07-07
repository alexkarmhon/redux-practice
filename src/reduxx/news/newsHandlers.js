import { nanoid } from "@reduxjs/toolkit";

export const handlePending = (state) => { state.isLoading = true }

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.news = payload.articles.map(article => {
    return {
      ...article,
      id: nanoid()
    }
  });
}

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}