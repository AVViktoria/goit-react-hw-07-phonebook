import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChanges(state, action) {
      return {
        state,
        filter: action.payload,
      };
    },
  },
});

export const { filterChanges } = filterSlice.actions;
