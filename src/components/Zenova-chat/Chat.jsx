import ChatAppBody from "./ChatAppBody";
import ChatAppHeader from "./ChatAppHeader";

function ChatApp() {
  return (
    <>
      <div className="bg-slate-900 text-white flex flex-col h-screen font-[Poppins]">
        <ChatAppHeader />
        <ChatAppBody />
      </div>
    </>
  );
}

export default ChatApp;
