import { createSelector } from 'reselect';

export const itemsSelector = state => state.phonebook.contacts;
export const filterSelector = state => state.filter.filter;
export const getIsLoadingSelector = state => state.phonebook.isLoading;
export const getFilteredContacts = createSelector(
  [itemsSelector, filterSelector],
  (contacts, filter) => {
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return visibleContacts;

    // const getVisibleContacts = () => {
    //   const normalizedFilter = filter.toLowerCase();
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizedFilter)
    //   );
    // };
    // const visibleContacts = getVisibleContacts();
  }
);
// const filter = useSelector(state => state.filter.filter);
// const contacts = useSelector(state => state.phonebook.contacts);
//*  фильтруем по имени  //
