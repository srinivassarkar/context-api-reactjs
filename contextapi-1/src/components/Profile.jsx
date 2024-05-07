import "../App.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  //   console.log(user);

  if (!user) return <div className="profile-container">Please login</div>;

  return (
    <div className="profile-container">
      <div className="profile-welcome">Welcome {user.username}</div>
    </div>
  );
}

export default Profile;
