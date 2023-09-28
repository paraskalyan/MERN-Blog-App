import { createSlice } from "@reduxjs/toolkit";

const searchQuery = createSlice({
    name: 'searchFilter',
    initialState: {searchQuery: ''},
    reducers:{
        setSearchQuery(state, action){
            state.searchQuery = action.payload;
        }
    }
})

export const {setSearchQuery} = searchQuery.actions;
export default searchQuery.reducer;