import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateRoom() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const CreateRoomHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const body = { title };

    try {
      const url = "http://localhost:8080/room/create";
      const response = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT')}`,
        },
      });
      console.log(response.data);
      navigate('/'); // Navigate to a different route on success
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
