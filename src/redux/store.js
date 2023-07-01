import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import Pagination from "./SliceProduct";
import Sortproduct from "./Slicesort";
import cartSlice from './cartSlice.js';

export const store = configureStore({
  reducer:{
    user : userSlice,
    page: Pagination,
    sort: Sortproduct,
    cart: cartSlice
  }
})