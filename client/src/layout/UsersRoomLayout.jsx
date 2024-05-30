import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function UsersRoomLayout() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const FetchUsers = async () => {
    const url = `http://localhost:8080/room/get-single-room/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      });
      console.log(response.data.room);
      return response.data.room.user;
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    FetchUsers().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <div className="bg-white h-full">
      <div className="bg-white shadow-md p-4 h-[10%]">
        <h1 className="text-2xl text-center font-bold">Users</h1>
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
        {/* <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div>
        <div className="shadow-md p-3">
          <h1 className="text-xl font-bold">selma</h1>
          <p>batatab007@gmail.com</p>
        </div> */}
      </div>
    </div>
  );
}
