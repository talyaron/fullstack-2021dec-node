import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { combineReducers } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'



const rootReducer = combineReducers({})




export const store = configureStore({
  reducer: {
    one: oneSlice.reducer,
    two: twoSlice.reducer,
    counter: counterReducer,
    reducer: rootReducer,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type rootState = ReturnType<typeof rootReducer>

export default store