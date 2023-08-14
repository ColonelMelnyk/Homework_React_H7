import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = [
          { 
            id: 'id-1',
            name: 'John Miller',
            number: '123-45-67'
          },
          {
            id: 'id-2',
            name: 'Michael Brown',
            number: '987-65-43'
          },
          {
            id: 'id-3',
            name: 'William Smith',
            number: '456-78-90'
          },
          {
            id: 'id-4',
            name: 'Robert Taylor',
            number: '234-56-78'
          },
          {
            id: 'id-5',
            name: 'James Johnson',
            number: '789-01-23'
          }
];

const contactsSliced = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    onAddContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    onDeleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { onAddContact,  onDeleteContact } = contactsSliced.actions;
export const contactsReducer = contactsSliced.reducer;