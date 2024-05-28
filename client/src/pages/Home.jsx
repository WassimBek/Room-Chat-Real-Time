import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/slice/userSlice";
import { useEffect, useState } from "react";
import AsideLayout from "../layout/AsideLayout";
export default function Home() {
  const dispatch = useDispatch();
  const [room, setRoom] = useState(0);

  const AuthorizationLoader = async () => {
    const token = localStorage.getItem("JWT");
    console.log(token);
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
        return location.href = "/Login";
      }
    }
    return location.href = "/Login";
  };
  useEffect(() => {
    AuthorizationLoader().then((room)=> {
      console.log(room.room.length)
      setRoom(room.room.length)
    })
    
  }, []);
  return (
    <div className="grid grid-cols-aside-bar h-[85%] w-[100%]">
      <main className="">
        <h1 className="text-2xl text-center font-bold pt-10">
          Welcome to Room-Chat-realtime
        </h1>
        <h2 className="text-2xl text-center font-bold pt-10">
          You have {room} rooms
        </h2>
      </main>
      <AsideLayout />
    </div>
  );
}
