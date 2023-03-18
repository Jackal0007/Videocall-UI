import {Activity, MoreHorizontal} from "react-feather";

export const CHAT_VARIANT_OPTION = {
  Active: Activity,
  Idle: MoreHorizontal,
};

export function Icon({status, color}) {
  const IconComponent = CHAT_VARIANT_OPTION[status];
  return <IconComponent color={color} size={14} />;
}

export const USERS = [
  {
    name: "you",
    imgUrl:
      "https://media.istockphoto.com/id/1337642347/photo/young-smiling-woman-waving-with-hand-on-video-call-at-home-office.jpg?s=612x612&w=0&k=20&c=d5cydGTpdfEQVZiz7AmQQ6WOu8UQflETdseZQLW6X7c=",
    status: "Active",
  },
  {
    name: "Ralph Edwards",
    imgUrl:
      "https://media.istockphoto.com/id/1210528619/video/smiling-man-look-at-camera-talk-make-videocall-at-home.jpg?s=640x640&k=20&c=ucC9TVALEDUhkDvM8N78fNWRxu9FXsFhWvpTrFDVfhg=",
    status: "Idle",
  },
  {
    name: "Jacob Jones",
    imgUrl:
      "https://media.istockphoto.com/id/1158583412/video/speaker-businessman-talking-at-webcam-making-conference-video-call.jpg?s=640x640&k=20&c=Yw2J5fFEW2wlbtUr7R_i_IQVANnas_wBtHyY-DFnnH0=",
    status: "Idle",
  },
  {
    name: "Emily huges",
    imgUrl:
      "https://media.istockphoto.com/id/1345980073/photo/mature-woman-on-a-video-call-on-the-laptop-at-home-webcam-point-of-view.jpg?s=612x612&w=0&k=20&c=_eEMeTCegh_-XbgLqJO6mFrPg2K_5urG01SAjP6kJmI=",
    status: "Idle",
  },
  {
    name: "Lily williams",
    imgUrl:
      "https://videohive.img.customer.envatousercontent.com/a4e7e0b6-a9c4-442a-a25a-84ca71a81531/video_preview/video_preview_0002.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=3f8a3910ed0167d2ccf25bf2e62704cf",
    status: "Idle",
  },
  {
    name: "Luna Huan",
    imgUrl:
      "https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/04/photo-of-a-woman-wearing-headphones-smiling-and-waving-as-if-on-a-video-conferencing-call-790x415.jpg",
    status: "Idle",
  },
];

function User() {
  return (
    <div className="flex w-[99%] justify-center mx-auto gap-2 mt-2">
      {USERS.map(({name, imgUrl, status}, idx) => {
        return (
          <div key={idx} className="relative">
            <img
              src={imgUrl}
              className="rounded-md w-[200px] h-[120px] object-cover"
            />
            <span className="text-black font-semibold absolute bottom-1 left-1 text-xs">
              {name}
            </span>
            <button className="bg-[#156cef] px-1 py-1 rounded-full absolute bottom-1 right-1">
              <Icon color={"white"} status={status} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default User;
