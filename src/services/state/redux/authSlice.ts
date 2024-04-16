import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResponseUpdateUserProfile, User } from '../../../models/auth'

export interface AuthState {
  isLoggedIn: boolean

  user?: User
}

const initialState: AuthState = {
  isLoggedIn: true,
  user: undefined
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isLoggedIn = true
    },

    logoutSuccess(state) {
      state.isLoggedIn = false
    },

    updateUserProfile(state, action: PayloadAction<ResponseUpdateUserProfile>) {
      state.user = action.payload.user
    }
  }
})

export const authSliceActions = authSlice.actions
