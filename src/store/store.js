import { configureStore } from '@reduxjs/toolkit';
import bookLibraryReducer from './features/bookLibrarySlice';

const store = configureStore({
  reducer: {
    book: bookLibraryReducer,
  },
});

export default store;
