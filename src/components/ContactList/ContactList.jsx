import { useDispatch, useSelector } from 'react-redux';
import { deleteItems } from '../../redux/contact/contact.reducer';
import { selectContacts, selectFilter } from '../../redux/contact/selector';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterApp = () => {
    return contacts.filter(fil =>
      fil.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const data = filterApp();

  const deleteItem = id => {
    dispatch(deleteItems(id));
  };

  return (
    <div>
      <ul>
        {data.map(con => (
          <li key={con.id}>
            {con.name}: {con.number}
            <button onClick={evt => deleteItem(con.id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
