import ChatLayout from "../../layout/ChatLayout";
import UsersRoomLayout from "../../layout/UsersRoomLayout";

export default function ChatPage() {
  return (
    <div className="grid grid-cols-chat-grid w-full h-full">
        <UsersRoomLayout />
        <ChatLayout />
    </div>
  )
}
