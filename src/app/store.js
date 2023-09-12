import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../feature/posts/postSlice'
import userReducer from '../feature/users/usersSlice'

// Add configuração para o store do Redux
export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer
    }
})