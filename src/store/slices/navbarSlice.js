import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "",
};

const navbarSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavHeading: (state, action) => {
      state.heading = action.payload;
    },
  },
});

export const { setNavHeading } = navbarSlice.actions;

export default navbarSlice.reducer;
