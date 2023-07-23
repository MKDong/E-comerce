import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import Pagination from "./SliceProduct";
import Sortproduct from "./Slicesort";
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer:{
    user : userSlice,
    page: Pagination,
    sort: Sortproduct,
    cart: cartSlice
  }
})