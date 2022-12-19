import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/index';

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const allContactsGet = await contactsApi.getContacts();
      return allContactsGet;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postAllContacts = createAsyncThunk(
  'contacts/postAllContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const allContactsPost = await contactsApi.postContacts(contact);
      return allContactsPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delAllContacts = createAsyncThunk(
  'contacts/delAllContacts',
  async (id, { rejectWithValue }) => {
    try {
      const allContactsDel = await contactsApi.deleteContacts(id);
      return allContactsDel;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
