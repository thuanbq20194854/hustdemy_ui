import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isLoggedIn: boolean
}

const initialState: AuthState = {
  isLoggedIn: true
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isLoggedIn = true
    },

    logoutSucces(state) {
      state.isLoggedIn = false
    }
  }
})

export const authSliceActions = authSlice.actions
