const intitialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

export const contactsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'delete/contact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/contact':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
