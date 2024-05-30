import {createSlice} from "@reduxjs/toolkit" ;
const initialValue = {room_name : '' , room_code : ''};

export const roomSlice = createSlice({
    name : "room" ,
    initialState : {value : initialValue} ,
    reducers : {
        setRoom : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setRoom} = roomSlice.actions

export default roomSlice.reducer