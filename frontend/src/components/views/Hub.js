import { useContext, useEffect, useState } from "react";
import TheContext from "../../TheContext";
import actions from "../api";
import axios from "axios";
import { Link } from "react-router-dom";
import Quill from "quill";

function Hub(props) {
  let { user, setUser } = useContext(TheContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   actions.getAllPosts().then((res) => {
  //     console.log(res);
  //     setPosts(res.data);
  //   });
  // }, []);

  // const getThemPosts = () => {
  //   return posts.map((eachPost) => {
  //     return <div>{eachPost.name}</div>;
  //   });
  // };

  let canvas = new Quill(".canvas");

  return (
    // SET DIV CLASS OF NOVELS.MAP TO .novelCovers, THE CSS IS ALREADY DONE
    <div className="Hub">
      <nav>
        <div>
          <img width="40em" src={user?.imageUrl} alt="User" style={{ borderRadius: "5em" }} />
          <button onClick={logOut}>Log Out</button>
        </div>
        <Link to="/directories">Directories</Link>
        <Link to="/canvas">Canvas</Link>
        <Link to="/hub">Hub</Link>
      </nav>
      <h2> {props.user?.name}'s Hub </h2>
      <section className="hubUserContent">
        <h1>Novels</h1>
        {/* {getThemPosts()} */}
        <div className="HubNovels">
          <div
            style={{
              background: "Grey",
              height: "15em",
              width: "10em",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em",
            }}
          >
            <h5>Ruin</h5>
          </div>
          <div
            style={{
              background: "Grey",
              margin: "1em",
              height: "15em",
              width: "10em",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>Genie & the Quintillionaire, the Rich Get Richer</h5>
          </div>
          <div
            style={{
              background: "Grey",
              margin: "1em",
              height: "15em",
              width: "10em",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>My Roomate Death</h5>
          </div>
          <div
            style={{
              background: "Grey",
              height: "15em",
              width: "10em",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em",
            }}
          >
            <h5>Tonya</h5>
          </div>
        </div>
        <section className="hubSection2">
          <div className="hubNotes">
            <div className="hubNotesList">
              <ol>
                <h4>My Notes</h4>
                <Link to="/notes">
                  <li>Plothole on line 75</li>
                </Link>
                <Link to="/">
                  <li>Chapter 8 Line 746 needs a revision</li>
                </Link>
                <Link to="/">
                  <li>Lorem, ipsum dolor sit amet </li>
                </Link>
                <Link to="/">
                  <li>Lorem, ipsum dolor sit amet </li>
                </Link>
                <Link to="/">
                  <li>Lorem, ipsum dolor sit amet </li>
                </Link>
              </ol>
            </div>
            <div className="hubNewNotes">
              <h4>New Notes</h4>
              {/* Code Here */}
              <div>
                <Quill className="canvas"></Quill>
              </div>
            </div>
          </div>

          <div className="hubTasks">
            <h2>To Do</h2>
          </div>
          <div className="hubTasks">
            <h2>Recently Edited</h2>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Hub;
