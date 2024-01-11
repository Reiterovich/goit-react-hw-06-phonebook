import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
// import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const filter = useSelector(state => state.contactStore.filter);
  console.log(filter);

  const contacts = useSelector(state => state.contactStore.contacts);
  console.log(contacts);

  // useEffect(() => {
  //   const stringafiendContacts = localStorage.getItem('contacts');

  //   const parsedContacts = JSON.parse(stringafiendContacts) ?? [];
  //   setContacts(parsedContacts);
  // }, []);

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

    const addContacts = {
      type: 'contacts/addContact',
      payload: contactData,
    };
    dispatch(addContacts);
    // setContacts(prevState => [...prevState, contactData]);
  };

  const filterName = filter => {
    const filterContacts = {
      type: 'filter/contact',
      payload: filter,
    };
    dispatch(filterContacts);
    // setFilter(filter);
  };

  const deleteItem = id => {
    const deleteContacts = {
      type: 'delete/contact',
      payload: id,
    };
    dispatch(deleteContacts);
    // setContacts(contacts.filter(product => product.id !== id));
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
