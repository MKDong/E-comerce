import { createSlice } from '@reduxjs/toolkit'
const dataUser = localStorage.getItem('user')
const ObjDataUser = JSON.parse(dataUser)
const initialState = {
  value: ObjDataUser ? ObjDataUser.user : {},
  valuelogin:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setUser : (state, action) => {
      state.value = action.payload
    },
     
    setlogin1 : (state, action) => {
        state.valuelogin = action.payload
      },
  },
})

export const {  setUser,setlogin1 } = userSlice.actions

export default userSlice.reducer