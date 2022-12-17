import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducer: {
    filterChanges: (_, { payload }) => payload,
  },
});

export const { filterChanges } = filterSlice.actions;
export default filterSlice.reducer;
