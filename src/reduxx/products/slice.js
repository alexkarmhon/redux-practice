import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { productsInitialState } from "./initialState";
import { createProductThunk, deleteProductThunk, getProductsThunk } from "./thunk";
import {
  handlePending,
  handleFulfilled,
  handleFulfilledCreate,
  handleFulfilledDelete,
  handleFulfilledGet,
  handleRejected
} from "./handlers";

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers:
    (builder) => {
      builder
        .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
        .addCase(createProductThunk.fulfilled, handleFulfilledCreate)
        .addCase(deleteProductThunk.fulfilled, handleFulfilledDelete)

        // .addCase(getProductsThunk.pending, handlePending)
        // .addCase(getProductsThunk.rejected, handleRejected)

        // .addCase(createProductThunk.pending, handlePending)
        // .addCase(createProductThunk.rejected, handleRejected)

        // .addCase(deleteProductThunk.pending, handlePending)
        // .addCase(deleteProductThunk.rejected, handleRejected)

        .addMatcher(
          isAnyOf(
            getProductsThunk.pending,
            createProductThunk.pending,
            deleteProductThunk.pending,
          ),
          handlePending)

        .addMatcher(
          isAnyOf(
            getProductsThunk.rejected,
            createProductThunk.rejected,
            deleteProductThunk.rejected,
          ),
          handleRejected)

        .addMatcher(
          isAnyOf(
            getProductsThunk.fulfilled,
            createProductThunk.fulfilled,
            deleteProductThunk.fulfilled,
          ),
          handleFulfilled)
    }

})

export const productsReducer = productsSlice.reducer;