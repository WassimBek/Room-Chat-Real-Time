import { HamburgerIcon } from "@chakra-ui/icons";
import Chat from "../components/Chat";
import MessageForm from "../components/MessageForm";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ChatLayout({ setChecked }) {
  const room = useSelector((state) => state.room.value);
  const [messages, setMessages] = useState([]);

  return (
    <div className="bg-white h-full grid grid-rows-chat-devider">
      <div className="bg-white h-full p-4 border-b-2 flex justify-center place-items-center">
        <h1 className="text-2xl font-bold">
          {room.room_name} |
          <span className="text-sm "> room code : {room.room_code}</span>
        </h1>
      </div>
      <div className="shadow-md">
        <Chat message={messages} setMessage={setMessages} />
      </div>
      <div className="mt-2">
        <MessageForm setMsg={setMessages} msg={messages} />
      </div>
    </div>
  );
}
