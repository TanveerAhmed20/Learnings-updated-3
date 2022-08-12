import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slices/UserSlice'
const combineReducers = {
 users:userReducer
}
export const store = configureStore({
  reducer:combineReducers,
});
  