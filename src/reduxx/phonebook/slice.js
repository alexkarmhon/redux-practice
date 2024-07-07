import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";
import { addContactThunk, deleteContactThunk, getContactsThunk } from "./thunk";
import {
  handleFilter,
  handleFulfilled,
  handleFulfilledDel,
  handleFulfilledGet,
  handleFullfilledAdd,
  handlePending,
  handleRejected
} from "./handlers";



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    changeFilter: handleFilter,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFullfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending),
        handlePending)
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected),
        handleRejected)
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled),
        handleFulfilled)

  }
})

export const contactsReducer = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;