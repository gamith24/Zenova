function ChatAppHeader() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-slate-800 border-b border-slate-700">
      <div className="flex gap-6 font-medium">
        <div className="cursor-pointer hover:text-sky-400">Followers</div>
        <div className="cursor-pointer hover:text-sky-400">Following</div>
        <div className="cursor-pointer hover:text-sky-400">In Contact</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-full cursor-pointer text-sm">
          Add Designer
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://via.placeholder.com/35"
            className="w-9 h-9 rounded-full"
            alt=""
          />
          <span className="text-sm">Ali Krayem</span>
        </div>
      </div>
    </div>
  );
}
export default ChatAppHeader;
