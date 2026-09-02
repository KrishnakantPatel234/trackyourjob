import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    user : null,
    isAuthenticated : false,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        addUser : (state , action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser : (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {addUser , removeUser } = authSlice.actions;

export default authSlice.reducer;