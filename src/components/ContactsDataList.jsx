import { useSelector } from 'react-redux';
import { DataContacts } from './ContactsData';
import css from './Form.module.css'
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map(contact => (
        <DataContacts key={contact.id} contact={contact}></DataContacts>
      ))}
    </ul>
  );
};