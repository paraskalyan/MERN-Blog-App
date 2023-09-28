import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {user: null, blogs: null},
    reducers:{
        addUser(state, action){
            state.user = action.payload;
        },
        removeUser(state){
            state.user = null
        },
        addBlogs(state, action){
            state.blogs = action.payload;
        }

    }
})

export const {addUser, removeUser, addBlogs} = userSlice.actions;
export default userSlice.reducer;