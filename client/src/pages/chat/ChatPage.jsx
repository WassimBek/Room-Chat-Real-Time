import { useState } from "react";
import ChatLayout from "../../layout/ChatLayout";
import UsersRoomLayout from "../../layout/UsersRoomLayout";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function ChatPage() {
  const [checked , setChecked] = useState(true) ;
  return (
    <div className={"grid md:grid-cols-chat-grid w-full h-full duration-75 ease-in " + (checked ? "grid-cols-chat-grid-responsive" : "grid-cols-chat-grid-responsive-checked")}>
        <UsersRoomLayout />
        <HamburgerIcon
          fontSize={30}
          cursor={"pointer"}
          className="md:invisible"
          position={"absolute"}
          marginTop={4}
          left={2}
          onClick={() => {
            setChecked(prev => !prev);
          }}
        />
        <ChatLayout setChecked={setChecked}/>
    </div>
  )
}
