import "./App.css";
import Videosection from "./Components/Videosection";
import VideoToolbar from "./Components/VideoToolbar";

function App() {
  return (
    <div className="App flex mx-auto h-[650px] container rounded-lg">
      <Videosection />
      <VideoToolbar />
    </div>
  );
}

export default App;
