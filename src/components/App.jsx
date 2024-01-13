import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import {
  addContacts,
  deleteItems,
  filterContacts,
} from '../redux/contact/contact.reducer';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contactStore.filter);

  const contacts = useSelector(state => state.contactStore.contacts);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      const stringafiendContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringafiendContacts);
    }
  }, [contacts]);

  const conactList = contactData => {
    if (
      contacts.some(
        elm =>
          elm.name.toLowerCase() === contactData.name.toLowerCase() ||
          elm.number === contactData.number
      )
    ) {
      window.alert(
        `${contactData.name} or ${contactData.number} is already in contacts!`
      );
      return;
    }

    dispatch(addContacts(contactData));
  };

  const filterName = filter => {
    dispatch(filterContacts(filter));
  };

  const deleteItem = id => {
    dispatch(deleteItems(id));
  };

  const filterApp = () => {
    return contacts.filter(fil =>
      fil.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form conactList={conactList} />
      <Filter filter={filter} filterName={filterName} />
      <ContactList onDelete={deleteItem} data={filterApp()} />
    </>
  );
};
