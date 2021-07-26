import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import actions from "./api";

function Sidebar(props) {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <div>
      <nav>
        <Link to="Auth">
          {/* <img src={user.imageURL} /> */}
          {console.log(user)}
          {user?.name}
        </Link>
        {/* <label for="Create">New</label>
        <select name="Create" id="newItem">
          <option value="Novel">Novel</option>
          <option value="Chapter">Chapter</option>
          <option value="Plot">Plot</option>
          <option value="Character">Character</option>
        </select> */}

        <Link to="/hub">Hub</Link>
        <Link to="/community-board">Community Board</Link>
        <Link to="/canvas">Canvas</Link>
        <Link to="/novels">Novels</Link>
        <Link to="/chapters">Chapters</Link>
        <Link to="/new-characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/plots">Plots</Link>
        <Link to="/scenes">Scenes</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
