import { createSlice } from "@reduxjs/toolkit";
//this slice and reducres are used to track user authentication
//helps to know is user is logged in or not when the app is loaded 
//so that respective content can be shown


const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login : (state,action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout : (state)=>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer;