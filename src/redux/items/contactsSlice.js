import { createSlice } from '@reduxjs/toolkit';
import { initPhoneBook } from 'utils/initPhoneBook';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: initPhoneBook,
  },
  reducers: {
    addSliceContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeSliceContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    },
  },
});

export const { addSliceContact, removeSliceContact } = contactsSlice.actions;
export default contactsSlice.reducer;

//*  add   or  this  option      //
// state.contacts.push(action.payload);
//*  remove   or  this  option   1    //
// const deleteContactItem = state.contacts.filter(
//   item => item.id !== action.payload
// );
// state.contacts = deleteContactItem;

//* remove   or  this  option   2    //
// const index = state.contacts.findIndex(
//   task => task.id === action.payload
// );
// state.contacts.splice(index, 1);

//*    one more  option  with actions (mentor didn't check)    //
// import { ACTIONS } from './actions';

// const initialState = {
//   contacts: initPhoneBook,
// };

// const contactsSlice = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS.addSliceContact:
//       return { ...state, contacts: [...state.contacts, action.payload] };

//     case ACTIONS.removeSliceContact:
//       return {
//   ...state,
//   contacts: state.contacts.filter(item => item.id !== action.payload),
// };

//     default:
//       return state;
//   }
// };

// const enhancer = devToolsEnhancer();
// export const store = createStore(contactsSlice, enhancer);
//*     this   for    folder/file  actions    //
// export const ACTIONS = {
//   addLikedPost: 'SliceContact/add',
//   removeLikedPost: 'SliceContact/remove',
// };

// export const addSliceContact = contact => {
//   return {
//     type: ACTIONS.addSliceContact,
//     payload: contact,
//   };
// };

// export const removeSliceContact = id => {
//   return {
//     type: ACTIONS.removeSliceContact,
//     payload: id,
//   };
// };
