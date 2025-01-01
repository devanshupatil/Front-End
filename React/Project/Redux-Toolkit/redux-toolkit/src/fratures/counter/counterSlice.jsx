import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  // This below is all of actions
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    reset: (state) =>{
        state.value = 0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset,incrementByAmount } = counterSlice.actions

export default counterSlice.reducer