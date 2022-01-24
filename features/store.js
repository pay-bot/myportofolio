import { configureStore } from '@reduxjs/toolkit';
import modal from '../features/modal/modalSlice';

export default configureStore({
  reducer: { modal },
});
