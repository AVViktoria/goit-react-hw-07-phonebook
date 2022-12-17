import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllContacts,
  delAllContacts,
} from '../../redux/contactsAll/contactsOperations';
import {
  itemsSelector,
  filterSelector,
  getIsLoadingSelector,
  getFilteredContacts,
} from '../../redux/contactsAll/contactsSelectors';
// import { itemsContacts } from '../../redux/contactsAll';
// import { removeSliceContact } from 'redux/items/contactsSlice';
// import * as contactsOperations from 'redux/contactsAll/index';
export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(getIsLoadingSelector);
  useSelector(getFilteredContacts);
  console.log(contacts);
  console.log(filter);

  // const contacts = useSelector(state => state.phonebook.contacts);
  //*  фильтруем по имени  //
  //   const getVisibleContacts = () => {
  //     const normalizedFilter = filter.toLowerCase();

  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   };
  //  const visibleContacts = getVisibleContacts();
  useEffect(() => {
    // dispatch(contactsOperations.getAllContacts());
    dispatch(getAllContacts());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(delAllContacts(id));
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className="listContacts">
                <span className="contact">
                  {name}: {number}
                </span>
                <button
                  className="listButton"
                  type="button"
                  id={id}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
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
