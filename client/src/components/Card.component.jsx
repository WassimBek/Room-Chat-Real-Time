import {
    Card,
    CardHeader,
    CardFooter,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import socket from "../Socket"
export default function RoomCard({index , room , setRoom}) {
  const navigate = useNavigate() ;
    const DeleteRoom = async(room_id) => {
        try {
            const url = `${import.meta.env.VITE_REACT_BASE_URL}/room/remove/${room_id}` ;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                },
            });
            setRoom(rm => rm.filter(r => r.id !== room_id))
            socket.emit("delete_room" , room_id)
            return ;
        } catch (error) {
            console.error("Error : " + error) ; 
            return ;
        }
    }

    useEffect(() => {
      const handleDeleteRoom = (room_id) => {
        setRoom((rm) => rm.filter((r) => r.id !== room_id));
      };
  
      socket.on("delete_single", handleDeleteRoom);
  
      return () => {
        socket.off("delete_single", handleDeleteRoom);
      };
    }, [setRoom , socket]);

  return (
    <Card key={index}>
      <CardHeader>
        <Heading size="md">{room.title}</Heading>
        <Text>room code : {room.room_code.code}</Text>
      </CardHeader>
      <Text className="text-center">Members : {room.user.length}</Text>
      <CardFooter className="flex justify-evenly">
        <Button
          bg="#12182B"
          color="white"
          _hover={{ bg: "#0f1626" }}
          variant="solid"
          onClick={() => navigate(`/chat/${room.id}`)}
        >
          Chat here
        </Button>
        <Button colorScheme="red" variant="outline" onClick={() => DeleteRoom(room.id)}>
          Delete Room
        </Button>
      </CardFooter>
    </Card>
  );
}
