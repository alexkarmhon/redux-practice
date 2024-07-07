import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, fetchProducts } from "./productsApi";

export const getProductsThunk = createAsyncThunk('products/fetchAll', (_, thunkAPI) => {
  try {
    return fetchProducts()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const createProductThunk = createAsyncThunk('products/create', (data, thunkAPI) => {
  try {
    return createProduct(data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteProductThunk = createAsyncThunk('products/delete', (id, thunkAPI) => {
  try {
    return deleteProduct(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})