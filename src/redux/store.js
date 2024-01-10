import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contact/contact.reducer';

const rootReducer = combineReducers({
  contactStore: contactsReducer,
});

export const store = createStore(rootReducer);
