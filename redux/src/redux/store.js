import { configureStore } from '@reduxjs/toolkit'
import countReducer from "../featured/countSlice"

export const store = configureStore({
  reducer: {
    counter:countReducer ,

  },
})