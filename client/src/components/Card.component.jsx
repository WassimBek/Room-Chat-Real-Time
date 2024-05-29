import {
    Card,
    CardHeader,
    CardFooter,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"
import axios from "axios"
export default function RoomCard({index , room , setRoom}) {

    const DeleteRoom = async(room_id) => {
        try {
            const url = `http://localhost:8080/room/remove/${room_id}` ;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                },
            });
            console.log('Delete Room Successful') ;
            setRoom(rm => rm.filter(r => r.id !== room_id)) ;
            return ;
        } catch (error) {
            console.error("Error : " + error) ; 
            return ;
        }
    }

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