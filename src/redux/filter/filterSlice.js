import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
