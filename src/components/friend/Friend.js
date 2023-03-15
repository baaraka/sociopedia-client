import "./Friend.css";

export default function Friend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftBarFriend">
      <img src={PF + user.profilePicture} alt="" className="leftBarFriendImg" />
      <span className="leftBarFriendName">{user.username}</span>
    </li>
  );
}
