import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { page: 0, pageSize: 0, total: 0 },
  // function: () => {},
  currentPage: 1,//action.payload.page;
  currentPageSize: 10,//action.payload.pageSize;
};

export const Pagination = createSlice({
  name: "page",
  initialState,
  reducers: {
    phantrang: (state, action) => {
      state.value = action.payload;
    },
    // phantrangfn: (state, action) => {
    //   state.function = action.payload;
    // },
    changepage: (state, action) => {
      state.currentPage = action.payload.page;
      state.currentPageSize = action.payload.pageSize;
    },
  },
});

export const { phantrang, phantrangfn, changepage } = Pagination.actions;

export default Pagination.reducer;
