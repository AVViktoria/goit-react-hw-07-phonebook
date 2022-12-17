// import { createSelector } from 'reselect';

export const itemsSelector = state => state.phonebook.contacts;
export const filterSelector = state => state.filter.filter;

// const filter = useSelector(state => state.filter.filter);
// const contacts = useSelector(state => state.phonebook.contacts);
