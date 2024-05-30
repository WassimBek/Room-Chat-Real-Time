import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import roomReducer from "./slice/roomSlice";
const Store = configureStore({
    reducer : {
        user : userReducer ,
        room : roomReducer ,
    }
})

export default Store;