import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {isAuth: false},
    reducers:{
        changeAuth:(state, action)=>{
            state.isAuth = action.payload
        }
    }
})

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;