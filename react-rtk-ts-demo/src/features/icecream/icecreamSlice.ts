import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numberOfIcecreams: number;
};

const initialState: initialStateType = {
  numberOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },
    reStocked: (state, action: PayloadAction<number>) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIcecreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;

export const { ordered, reStocked } = icecreamSlice.actions;
