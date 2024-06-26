import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from 'react';
import socket from "../Socket"
export default function CreateRoom({setRoom}) {
  const [title, setTitle] = useState('');

  const CreateRoomHandler = async (event) => {
    event.preventDefault();
    const body = { title };

    try {
      const url = `${import.meta.env.VITE_REACT_BASE_URL}/room/create`;
      const response = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT')}`,
        },
      });
      setRoom(room => {
        return [...room, response.data.room]
      })
      socket.emit("join_room" , response.data.room.id)
      setTitle('') ;
    } catch (error) {
      console.log(error);
      alert('An error occurred while creating the room.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Create Room</h1>
      <form method="POST" onSubmit={CreateRoomHandler}>
        <FormControl isRequired marginY={2}>
          <FormLabel>Room Name:</FormLabel>
          <Input
            borderRadius="1rem"
            paddingX="18px"
            paddingY="18px"
            border="1px solid #12182B"
            type="text"
            name="title"
            placeholder="Room Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
      </form>
    </div>
  );
}
