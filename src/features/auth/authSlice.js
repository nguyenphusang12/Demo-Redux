import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
