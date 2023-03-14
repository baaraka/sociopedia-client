import Feed from "../../components/feed/Feed";
import TopBar from "../../components/topbar/TopBar";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <TopBar />
      <div className="profileContainer">
        <LeftBar />
        <div className="profileRightContainer">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">barack doe</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
