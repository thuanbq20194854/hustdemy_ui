import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { authSlice } from './authSlice'
import { cartSlice } from './cartSlice'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import persistReducer from 'redux-persist/es/persistReducer'
// import persistStore from 'redux-persist/es/persistStore'
import { persistReducer, persistStore } from 'redux-persist'

// ...

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//     cart: cartSlice.reducer
//   }
// })

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer
})
const persistConfig = {
  key: 'root',
  storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger)
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
