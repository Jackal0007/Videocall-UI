import User from "./User";
import ChatSettings from "./ChatSettings";

function Videosection() {
  return (
    <div className="bg-black rounded-tl-md rounded-bl-md flex-[3]">
      <section className="flex justify-start items-center p-2 relative">
        <div>
          <p className="text-white text-left">
            End-to-end Data science Project
          </p>
          <p className="font-bold text-white text-left">QA video session</p>
        </div>
        <div className="mx-auto flex gap-4 absolute left-0 right-0 w-[50%] justify-center">
          <button className="text-[#9aa0a4] opacity-70 font-semibold">
            Document
          </button>
          <button className="bg-[#9aa0a4] p-2 rounded-lg text-white font-semibold">
            Meeting
          </button>
        </div>
      </section>
      <main>
        <img
          className="w-[99%] mx-auto rounded-md h-[400px] object-fill"
          src="https://media.istockphoto.com/id/1337642347/photo/young-smiling-woman-waving-with-hand-on-video-call-at-home-office.jpg?s=612x612&w=0&k=20&c=d5cydGTpdfEQVZiz7AmQQ6WOu8UQflETdseZQLW6X7c="
          alt="girl on a video call"
        />
      </main>
      <User />
      <ChatSettings />
    </div>
  );
}

export default Videosection;
