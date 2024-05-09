import { ResponseLogin, ResponseSignUp } from './../../../models/auth'
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
    startLogin(state) {
      state.isLoading = true
    },
    loginSuccess(state, action: PayloadAction<ResponseLogin>) {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoading = false
    },

    logoutSuccess(state) {
      console.log('logout')
      state.isLoggedIn = false
      state.user = undefined
      state.token = ''
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
