import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/slice/userSlice";
import { useEffect, useState } from "react";
import AsideLayout from "../layout/AsideLayout";
import {HamburgerIcon} from "@chakra-ui/icons"
import {
  SimpleGrid,
} from "@chakra-ui/react";
import RoomCard from "../components/Card.component";
export default function Home() {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [isChecked , setIsChecked] = useState(true) ;
  const AuthorizationLoader = async () => {
    const token = localStorage.getItem("JWT");
    if (token) {
      try {
        const url = `http://localhost:8080/room/get-rooms`;
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
      setRooms(room.room);
    });
  }, []);
  return (
    <div className={"grid h-[85%] w-full duration-200 ease-in-out " + (isChecked ? "grid-cols-aside-bar-checked" : "grid-cols-aside-bar")}>
      <main className="overflow-y-auto">
        <h1 className="text-2xl text-center font-bold pt-10 mb-10">
          Welcome to Room-Chat-realtime
        </h1>
        {rooms.length == 0  ? (
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
                  <RoomCard key={index} index={index} room={room} setRoom={setRooms}/>
                ))}
              </SimpleGrid>
            </div>
          </>
        )}
      </main>
      <div className="relative">
        <HamburgerIcon onClick={() => {
          setIsChecked(!isChecked)
        }} fontSize={40} position={"absolute"} right={0}  p={1} cursor={"pointer"}/>
      </div>
      { isChecked && <AsideLayout setRoom={setRooms}/>}
    </div>
  );
}
