import Feed from "../../components/feed/Feed";
import TopBar from "../../components/topbar/TopBar";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}
