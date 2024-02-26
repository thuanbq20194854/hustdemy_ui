import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { userSlice } from './userSlice'
import { cartSlice } from './cartSlice'
// ...

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
