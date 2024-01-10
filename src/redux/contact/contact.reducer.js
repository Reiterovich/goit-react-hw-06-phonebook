const intitialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

export const contactsReducer = (state = intitialState, action) => {
  return state;
};
