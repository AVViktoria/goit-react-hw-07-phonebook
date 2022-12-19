import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './items/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  phonebook: contactsSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

// filter: filterSlice.reducer,
// phonebook: contactsReducer,
