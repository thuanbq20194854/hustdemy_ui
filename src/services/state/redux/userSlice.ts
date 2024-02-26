import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  isAuthenticated: boolean
}

const initialState: UserState = {
  isAuthenticated: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isAuthenticated = true
    }
  }
})

export const userSliceActions = userSlice.actions
