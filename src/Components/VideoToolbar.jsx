import {Search} from "react-feather";
import {Icon, USERS} from "./User";

function TopSection() {
  return (
    <>
      <section className="flex justify-around gap-2 items-center mt-2">
        <button className="text-gray-600">Chat</button>
        <button className="text-black bg-[#f0f1f3] p-2 rounded-md">
          Participants
        </button>
      </section>
      <div className="mt-2 w-[90%] mx-auto relative">
        <form className="bg-[#f0f1f3]">
          <input
            className="p-2 bg-[#f0f1f3] focus:outline-none"
            type="search"
            placeholder="Search for people"
          />
        </form>
        <Search
          className="absolute top-0 bottom-0 my-auto left-1"
          size={18}
          color="gray"
        />
      </div>
    </>
  );
}

function UserList() {
  return (
    <div className="mt-2">
      <p className="text-left ml-2 text-sm">On the call</p>
      {USERS.map(({status, name, imgUrl}) => {
        return (
          <li className="list-none flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 ml-2">
              <img
                src={imgUrl}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <span>{name}</span>
            </div>
            <button className="mr-2 bg-[#156cef] rounded-full p-2">
              <Icon status={status} color="white" />
            </button>
          </li>
        );
      })}
    </div>
  );
}

function VideoToolbar() {
  return (
    <div className="bg-white h-full flex-1 rounded-tr-md rounded-br-md">
      <TopSection />
      <UserList />
    </div>
  );
}

export default VideoToolbar;
