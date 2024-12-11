import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openCart(state) {
      state.cartIsVisible = true;
    },
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
