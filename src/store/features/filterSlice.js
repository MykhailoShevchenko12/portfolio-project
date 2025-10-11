import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titleFilter: '',
  authorFilter: '',
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.titleFilter = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.authorFilter = action.payload;
    },
    toggleOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  toggleOnlyFavorite,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
