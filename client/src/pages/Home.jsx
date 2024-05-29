import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/slice/userSlice";
import { useEffect, useState } from "react";
import AsideLayout from "../layout/AsideLayout";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import RoomCard from "../components/Card.component";
export default function Home() {
  const dispatch = useDispatch();
  const [roomNumbers, setRoomNumbers] = useState(0);
  const [rooms, setRooms] = useState([]);
  const AuthorizationLoader = async () => {
    const token = localStorage.getItem("JWT");
    if (token) {
      try {
        const url = `http://localhost:8080/room/get-rooms/${localStorage.getItem(
          "ID"
        )}`;
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(
          login({
            username: response.data.room.username,
            email: response.data.room.email,
            id: response.data.room.id,
            exist: true,
          })
        );
        return response.data.room;
      } catch (error) {
        console.error(`ERROR : ${error.message}`);
        return (location.href = "/Login");
      }
    }
    return (location.href = "/Login");
  };
  useEffect(() => {
    AuthorizationLoader().then((room) => {
      setRoomNumbers(room.room.length);
      setRooms(room.room);
      console.log(room.room);
    });
  }, []);
  return (
    <div className="grid grid-cols-aside-bar h-[85%] w-[100%]">
      <main>
        <h1 className="text-2xl text-center font-bold pt-10 mb-10">
          Welcome to Room-Chat-realtime
        </h1>
        {roomNumbers == 0 ? (
          <>
            <h2 className="text-2xl text-center font-bold pt-10">
              No room yet
            </h2>
          </>
        ) : (
          <>
            <div>
              <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                padding={2}
              >
                {rooms.map((room, index) => (
                  <RoomCard index={index} room={room} setRoom={setRooms}/>
                ))}
              </SimpleGrid>
            </div>
          </>
        )}
      </main>
      <AsideLayout setRoom={setRooms}/>
    </div>
  );
}
