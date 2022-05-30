import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.value = action.payload.value;
    },
  },
});
export const { getUserInfo } = userSlice.actions;
export default userSlice.reducer;
