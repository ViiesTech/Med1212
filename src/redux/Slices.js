import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  user: []
}

export const slices = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.user = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { userDetails } = slices.actions

export default slices.reducer