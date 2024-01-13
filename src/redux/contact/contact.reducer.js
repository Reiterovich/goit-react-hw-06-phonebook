import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteItems(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteItems, filterContacts } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
//
//
//

//
//
// export const contactsReducer = (state = intitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'delete/contact':
//       return {
//         ...state,
// contacts: state.contacts.filter(
//   contact => contact.id !== action.payload
// ),
//       };
//     case 'filter/contact':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const addContacts = payload => {
//   return {
//     type: 'contacts/addContact',
//     payload,
//   };
// };

// export const deleteItems = payload => {
//   return {
//     type: 'delete/contact',
//     payload,
//   };
// };

// export const filterContacts = payload => {
//   return {
//     type: 'filter/contact',
//     payload,
//   };
// };
