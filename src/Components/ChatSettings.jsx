import {Video, Mic, MoreVertical, Share, Phone} from "react-feather";

function ChatSettings() {
  return (
    <div className="w-[50%] mx-auto flex justify-center gap-4 mt-2">
      <button className="bg-gray-500 px-2 py-2 rounded-full">
        <Video color="white" size={18} />
      </button>
      <button className="bg-gray-500 px-2 py-2 rounded-full">
        <Mic color="white" size={18} />
      </button>
      <button className="bg-gray-500 px-2 py-2 rounded-full">
        <Share color="white" size={18} />
      </button>
      <button className="bg-gray-500 px-2 py-2 rounded-full">
        <MoreVertical color="white" size={18} />
      </button>
      <button className="bg-red-600 px-2 py-2 rounded-full">
        <Phone color="white" size={18} />
      </button>
    </div>
  );
}

export default ChatSettings;
