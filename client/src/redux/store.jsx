import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"


const Store = configureStore({
    reducer : {
        user : userReducer
    }
})

export default Store;