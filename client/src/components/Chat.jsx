import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../Socket"
export default function Chat({ message, setMessage}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const chatContainerRef = useRef(null);
  const GetRoomMessages = async () => {
    const url = `http://localhost:8080/chat/get-messages/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      });
      return response.data.data;
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    GetRoomMessages().then((data) => {
      setMessage(data);
    });
  }, []);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [message]);

  useEffect(() => {
    const handleMessageReceive = (message) => {
      setMessage((prevMessages) => [...prevMessages, message]);
    };

    socket.on("recieve_message", handleMessageReceive);

    return () => {
      socket.off("recieve_message", handleMessageReceive);
    };
  }, [socket, setMessage]);


  return (
    <div ref={chatContainerRef} className="w-full h-full overflow-y-auto p-4">
      {message &&
        message.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 flex ${
              msg.user_id === localStorage.getItem("ID")
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[60%] p-4 rounded-xl ${
                msg.user_id === localStorage.getItem("ID")
                  ? "bg-primary-blue text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <h1 className="font-bold">{msg.user.username}</h1>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
