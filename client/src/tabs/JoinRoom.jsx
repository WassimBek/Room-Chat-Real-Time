import { Form } from "react-router-dom";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import socket from "../Socket"
export default function JoinRoom({setRoom}) {
  const [roomCodeError , setRoomCodeError] = useState('');
  const HandelJoinRoom = async(e) => {
    e.preventDefault();
    const body = {
      room_code : Number(e.target.code.value) 
    };
    try {
      const url = `${import.meta.env.VITE_REACT_BASE_URL}/room/join` ;
      const response = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT')}`,
        },
      });
      setRoom(room => {
        return [...room, response.data.room]
      })
      socket.emit("join_room" , response.data.room.id)
      e.target.code.value = '' ;
    } catch (error) {
      setRoomCodeError(error.response.data.message) ;
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Join Room</h1>
      <Form method="POST" onSubmit={HandelJoinRoom}>
        <FormControl isRequired marginY={2}>
          <FormLabel>Room Code : </FormLabel>
          <Input
            borderRadius="1rem"
            paddingX="18px"
            paddingY="18px"
            border="1px solid #12182B"
            type="number"
            name="code"
            placeholder="Room Code..."
          />
          {roomCodeError && <p className="text-red-500">{roomCodeError}</p>}
        </FormControl>
        <Button
          bgColor={"transparent"}
          borderWidth={2}
          borderColor={"#12182B"}
          color={"black"}
          type="submit"
          width={"100%"}
          marginTop={"10px"}
          borderRadius="1rem"
          _hover={{ bgColor: "#12182B", color: "white" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
