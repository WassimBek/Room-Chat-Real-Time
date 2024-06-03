import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import {setRoom} from "../redux/slice/roomSlice"
export default function UsersRoomLayout() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch() ;
  const FetchUsers = async () => {
    const url = `http://localhost:8080/room/get-single-room/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      });
      dispatch(setRoom({room_name : response.data.room.title , room_code :response.data.room.room_code.code }))
      return response.data.room.user;
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    FetchUsers().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="bg-white h-full border-r-2">
      
      <div className="bg-white  p-4 h-[10%] border-b-2 flex justify-center place-items-center">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="p-2 overflow-y-auto remove_scroll_bar h-[90%]">
        {user.map((user) => (
          <>
            <div className="shadow-md p-3">
              <h1 className="text-xl font-bold">{user.username}</h1>
              <p>{user.email}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
