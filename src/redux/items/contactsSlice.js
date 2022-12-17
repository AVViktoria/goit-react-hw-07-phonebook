import { createSlice } from '@reduxjs/toolkit';
import { initPhoneBook } from 'utils/initPhoneBook';
import {
  getAllContacts,
  postAllContacts,
  delAllContacts,
} from '../contactsAll';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: initPhoneBook,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    //*    getAllContacts     //
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    });
    builder.addCase(getAllContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(getAllContacts.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });
    //*    postAllContacts     //
    builder.addCase(postAllContacts.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.contacts.isLoading = false;
    });
    builder.addCase(postAllContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(postAllContacts.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });
    //*    delAllContacts     //
    builder.addCase(delAllContacts.fulfilled, (state, action) => {
      state.contacts.filter(item => item.id !== action.payload);
      state.contacts.isLoading = false;
    });
    builder.addCase(delAllContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(delAllContacts.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });
  },
  // [getAllContacts.fulfilled]: (_, { payload }) => payload,
  // [getAllContacts.pending]: (_, { payload }) => payload,

  // [getAllContacts.error]: (_, { payload }) => payload,
  // [postAllContacts.fulfilled]: (state, { payload }) => [...state, payload],
  // [delAllContacts.fulfilled]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
  // addSliceContact(state, action) {
  //   return { ...state, contacts: [...state.contacts, action.payload] };
  // },
  // removeSliceContact(state, action) {
  //   return {
  //     ...state,
  //     contacts: state.contacts.filter(item => item.id !== action.payload),
  //   };
  // },
  // },
});

// export const { addSliceContact, removeSliceContact } = contactsSlice.actions;
// export default contactsSlice.reducer;

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
