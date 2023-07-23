import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItems : [],
  cartQuantity:0,
  cartAmount:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart : (state, action) => {
      state.cartItems.push(action.payload)
    },
     

  },
})

export const {  addToCart } = cartSlice.actions

export default cartSlice.reducer