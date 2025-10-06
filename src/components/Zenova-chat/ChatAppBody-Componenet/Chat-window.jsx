import SendTo from "./ChatSendTo";
import SendBy from "./ChatSendBy";
import ChatInput from "./ChatInput";
function ChatWindow() {
  return (
    <>
      <div className="flex flex-col flex-1 Chat-bg">
        <div className="px-6 py-3 font-semibold Chat-Person--placeholder">
          Alen Santos
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4 Chat--Chat-placeholder">
          <SendBy />
          <SendTo />
          <SendBy />
        </div>
        {/* {Chat Input} */}
        <ChatInput />
      </div>
    </>
  );
}

export default ChatWindow;
