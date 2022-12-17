import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './items/contactsSlice';
import { filterSlice } from './filter/filterSlice';

// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// //*       Persist            //
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);
const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  phonebook: contactsSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // filter: filterSlice.reducer,
  // phonebook: contactsReducer,
});
