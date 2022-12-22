import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './items/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  phonebook: contactsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

// filter: filterSlice.reducer,
// phonebook: contactsReducer,
