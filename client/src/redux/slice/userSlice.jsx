import { createSlice } from "@reduxjs/toolkit";

const initialValue = {username : '' , id : '' , email : '' , exist : false}

export const userSlice = createSlice({
    name : "user" ,
    initialState : {value : initialValue} ,
    reducers : {
        login : (state , action) => {
            state.value = action.payload
        },
        logout : (state) => {
            state.value = initialValue
        }
    }
})



export const {login , logout} = userSlice.actions

export default userSlice.reducer