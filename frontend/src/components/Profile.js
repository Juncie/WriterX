import { useContext, useEffect, useState } from "react";
import TheContext from "../TheContext";
import actions from "../api";
import axios from "axios";

console.log(actions);
function Profile(props) {
  let { user, setUser } = useContext(TheContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    actions.getRake().then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

  console.log(posts);

  const getThemPosts = () => {
    return posts.map((eachPost) => {
      return <div>{eachPost.name}</div>;
    });
  };

  return (
    <div>
      <h2> Profile {props.user?.name}</h2>
      {getThemPosts()}
      <img src={user?.imageUrl} alt="User" />
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Profile;
