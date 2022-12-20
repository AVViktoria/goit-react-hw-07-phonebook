import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllContacts,
  // delAllContacts,
} from '../../redux/contactsAll/contactsOperations';
import {
  getIsLoadingSelector,
  getFilteredContacts,
} from '../../redux/contactsAll/contactsSelectors';
import { ContactListItem } from 'components/ContactListItem/contactListItem';
export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  // const deleteContact = id => {
  //   dispatch(delAllContacts(id));
  // };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {contacts.map(({ id, contact }) => {
            return <ContactListItem key={id} contact={contact} />;
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
