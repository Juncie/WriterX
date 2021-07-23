import { useContext, useEffect, useState } from "react";
import TheContext from "../TheContext";
import actions from "./api";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Hub.css'

console.log(actions);
function Hub(props) {
  let { user, setUser } = useContext(TheContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    actions.getAllPosts().then((res) => {
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
      <nav>
              {/* <Link to="/welcome">Home</Welcome> */}
              <Link to="/hub">Hub</Link>
              <Link to="/community-board">Community Board</Link>
              <Link to="/Auth">Login/Logout</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/novels">Novels</Link>
              <Link to="/chapters">Chapters</Link>
              <Link to="/characters">Characters</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/plots">Plots</Link>
              <Link to="/scenes">Scenes</Link>
          </nav>
          <h2> Hub {props.user?.name}</h2>
      {getThemPosts()}
      <img src={user?.imageUrl} alt="User" />
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Hub;
