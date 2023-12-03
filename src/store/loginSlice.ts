import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: false,
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = true;
    },
    setLogout: (state) => {
      state.login = false;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
