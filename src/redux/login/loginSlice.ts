import { createSlice } from "@reduxjs/toolkit";

interface ILoginState {
  loginOpen: boolean;
}

const inicitalState: ILoginState = {
  loginOpen: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState: inicitalState,
  reducers: {
    openLogin: (state) => {
      state.loginOpen = true;
    },
    closeLogin: (state) => {
      console.log("123");

      state.loginOpen = false;
    },
  },
});

export const { openLogin, closeLogin } = loginSlice.actions;
export default loginSlice.reducer;
