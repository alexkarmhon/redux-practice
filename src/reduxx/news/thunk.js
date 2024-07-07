import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "./newsAPI";

export const fetchNews = createAsyncThunk('news/fetchAll', (_, thunkAPI) => {
  try {
    return getNews();
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const fetchNewsByQuery = createAsyncThunk('news/fetchAll', (query, thunkAPI) => {
  try {
    return getNews(query);
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})