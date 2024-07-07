import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, fetchContacts } from "./phonebookAPI";

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', (_, thunkAPI) => {
  try {
    return fetchContacts()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', (newContact, thunkAPI) => {
  try {
    return addNewContact(newContact)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', (contactId, thunkAPI) => {
try {
  return deleteContact(contactId)
} catch (error) {
  return thunkAPI.rejectWithValue(error)
}
})