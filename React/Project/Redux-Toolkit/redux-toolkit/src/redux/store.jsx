import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../fratures/counter/counterSlice'


export const store = configureStore({
  reducer: { counter: counterReducer },
})


/*
    steps:
        1. create store
        2. wrap app component under Provider
        3. create slice
        4. register reducer in store
*/