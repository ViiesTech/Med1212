import { configureStore } from '@reduxjs/toolkit'
import { slices } from './Slices'

export const store = configureStore({
  reducer: {
    store: slices.reducer
  },
})