import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onDeleteContact } from 'redux/SliceContacts';
export const DataContacts = ({ contact }) => {
  const dispatch = useDispatch();
  const onHandleDelete = () => dispatch(onDeleteContact(contact.id));

  return (
        <li  key={contact.id}>
          <p>{contact.name}: {contact.number}</p>
          <button type="button" onClick={onHandleDelete}>
            Delete
          </button>
        </li>

  );
};

DataContacts.propTypes = {
  contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
};