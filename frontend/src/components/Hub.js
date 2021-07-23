import { useContext, useEffect, useState } from "react";
import TheContext from "../TheContext";
import actions from "./api";
import axios from "axios";
import { Link } from 'react-router-dom';

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

  const getThemPosts = () => {
    return posts.map((eachPost) => {
      return <div>{eachPost.name}</div>;
    });
  };

  return (
    <div>
      <h2> Hub {props.user?.name}</h2>
      <nav>
              <Link to="/directories">Directories</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/hub">Hub</Link>  
          </nav>  

      {getThemPosts()}
      <img src={user?.imageUrl} alt="User" />
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Hub;
