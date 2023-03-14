import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./RightBar.css";

export default function RightBar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Dar es salaam</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Mwanza</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
