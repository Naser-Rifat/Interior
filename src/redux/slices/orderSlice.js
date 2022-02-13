import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allorder: [],
    myorder: [],
  },
  reducers: {
    addTocart: (state) => {},
    removeTocart: (state) => {},
  },
});

export const { addTocart, removeTocart } = orderSlice.actions;

export default orderSlice.reducer;
