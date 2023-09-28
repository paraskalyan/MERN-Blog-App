import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/User'
import numReducer from './reducers/IncDec';
import counterSlice from './features/counter'
import authSlice from './features/authSlice';
import userSlice from './features/userSlice';
import blogSlice from './features/blogSlice';
import searchQuery from './features/searchQuery';
const store = configureStore({
    reducer:{
       count: counterSlice,
       auth: authSlice,
       user: userSlice,
       blogs: blogSlice,
       search: searchQuery,
    }
})

export default store;