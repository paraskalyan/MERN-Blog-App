import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blogs',
    initialState: { blogs: null },
    reducers:{
        addToBlogs(state, action){
            state.blogs = action.payload;
        }
    }
})

export const {addToBlogs} = blogSlice.actions;
export default blogSlice.reducer; 