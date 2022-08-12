import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      console.log('startloading called');
      state.loading = true;
    },
    stopLoading: (state) => {
      console.log('stopLoading called');
      state.loading = false;
    },
  },
});
export const { startLoading, stopLoading } = usersSlice.actions;
export const usersSelector = (state) => state.users;
export default  usersSlice.reducer;
