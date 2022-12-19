import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChanges(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterChanges } = filterSlice.actions;
export default filterSlice.reducer;
