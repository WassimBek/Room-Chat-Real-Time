import MessageForm from "../components/MessageForm";
export default function ChatLayout() {
  
  return (
    <div className="bg-white h-full grid grid-rows-chat-devider">
      <div className="bg-white p-4 border-b-2 flex justify-center place-items-center">
        <h1 className="text-2xl font-bold">
          Room Name <span>Room Code</span>
        </h1>
      </div>
      <div className="shadow-md">Chat</div>
      <div className="mt-2 ">
        <MessageForm />
      </div>
    </div>
  );
}
