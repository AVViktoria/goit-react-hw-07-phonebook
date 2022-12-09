import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeSliceContact } from 'redux/items/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.phonebook.contacts);
  //*  фильтруем по имени  //
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="listContacts">
            <span className="contact">
              {name}: {number}
            </span>
            <button
              className="listButton"
              type="button"
              id={id}
              onClick={() => dispatch(removeSliceContact(id))}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
