import { ResponseSignUp } from './../../../models/auth'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResponseUpdateProfile, User } from '../../../models/auth'

export interface AuthState {
  isLoggedIn: boolean
  user?: User
  token: string
  isLoading: boolean
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
  token: '',
  isLoading: false
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

    updateUserProfile(state, action: PayloadAction<ResponseUpdateProfile>) {
      state.user = action.payload.user
    },

    signUp(state, action: PayloadAction<ResponseSignUp>) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    }
  }
})

export const authSliceActions = authSlice.actions
