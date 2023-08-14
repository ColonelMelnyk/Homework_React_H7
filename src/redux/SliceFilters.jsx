import { createSlice } from '@reduxjs/toolkit';
const filteredContacts = createSlice({
  name: 'filter',
  initialState: ``,
  reducers: {
    updateFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filteredContacts.actions;
export const reducerFilter = filteredContacts.reducer;