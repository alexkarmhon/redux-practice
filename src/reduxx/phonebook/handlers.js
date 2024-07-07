export const handlePending = (state) => { state.contacts.isLoading = true };

export const handleFulfilled = (state) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
}

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
}

export const handleFulfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
}

export const handleFullfilledAdd = (state, { payload }) => {
  state.contacts.items.push(payload);
}

export const handleFulfilledDel = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id);
}


export const handleFilter = (state, { payload }) => {
  state.filter = payload;
}