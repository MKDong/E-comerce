import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  arrprouduct: [],
  rangeprice: { min: 0, max: 0 },
  newarrrange: [],
};

export const Sortproduct = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setvaluesort: (state, action) => {
      state.value = action.payload;
    },
    arrproductslice: (state, action) => {
      state.arrprouduct = action.payload;
    },
    filterrange: (state, action) => {
      state.rangeprice = action.payload;
    },
    newarrrange1: (state, action) => {
      state.newarrrange = action.payload;
      console.log('redux', action.payload, state.newarrrange);
    },
  },
});

export const { setvaluesort, arrproductslice, filterrange, newarrrange1 } =
  Sortproduct.actions;

export default Sortproduct.reducer;
