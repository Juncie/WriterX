import { useContext, useEffect, useState } from "react";
import TheContext from ".././TheContext";
import actions from "./api";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

//
function Hub(props) {
  //Log Out
  let { user, setUser } = useContext(TheContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // GET REQUESTS

  //Novels
  const [novels, setNovels] = useState([]);
  useEffect(() => {
    actions.getUserNovels().then((res) => {
      console.log(res);
      setNovels(res.data);
    });
  }, []);

  const getEachNovel = () => {
    return novels.map((eachNovel) => {
      return (
        <div className="novelCovers">
          <h5>{eachNovel.name}</h5>
          {/* SET BACKGROUND CHANGE FUNCTION HERE */}
        </div>
      );
    });
  };

  //Notes
  const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   actions.getAllNotes().then((res) => {
  //     console.log(res);
  //     setNotes(res.data);
  //   });
  // }, []);

  // const getEachNote = () => {
  //   return notes.map((eachNote) => {
  //     return (
  //       <div className="Notes">
  //         <h5>{eachNote.title}</h5>
  //         {/* SET NOTE TEXT HERE*/}
  //       </div>
  //     );
  //   });
  // };

  //POST REQUESTS

  //NEW NOVEL
  const [novel, setNovel] = useState([]);
  const [author, setAuthor] = useState("");
  const handleNovelChange = (e) => {
    setNovel(e.target.value);
    console.log(novel);
  };

  const handleNovelSubmit = async (e) => {
    e.preventDefault();
    setAuthor(user.name);
    console.log(author);
    let res = await actions.newNovel({ novel, author });
    console.log("submitted", novel);
  };

  return (
    // SET DIV CLASS OF NOVELS.MAP TO .novelCovers, THE CSS IS ALREADY DONE
    <div className="Hub">
      {/* <Sidebar /> */}
      {/* <nav>
        <div>
          <img width="40em" src={user?.imageUrl} alt="User" style={{ borderRadius: "5em" }} />
          <button onClick={logOut}>Log Out</button>
        </div>
        <Link to="/directories">Directories</Link>
        <Link to="/canvas">Canvas</Link>
        <Link to="/hub">Hub</Link>
      </nav> */}
      <h2> {props.user?.name}'s Hub </h2>
      <section className="hubUserContent">
        <h1>Novels</h1>
        <div className="HubNovels">
          {/* {getAllNovels()} */}
          <form onSubmit={handleNovelSubmit}>
            <input onChange={handleNovelChange} type="text" name="novel" />
            <input type="submit" />
          </form>
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
        </div>
        <section className="hubSection2">
          <div className="hubNotes">
            <div className="parentNewNote">
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
                  <Link to="/">
                    <li>Lorem, ipsum dolor sit amet </li>
                  </Link>
                  <Link to="/">
                    <li>Lorem, ipsum dolor sit amet </li>
                  </Link>
                </ol>
              </div>
              <form className="inputNote">
                <h4>New Notes</h4>
                <textarea className="hubNewNote" id="New Notes" placeholder="New Note">
                  <input type="text" placeholder="Title" />
                </textarea>
                <div>
                  <button>Add New Note</button>
                </div>
              </form>
            </div>
          </div>

          <div className="hubTasks">
            <h2>To Do</h2>
            <input type="checkbox" id="checkbox" value="Edits" />
            <label for="checkbox">Edit Chapter 1</label>
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
