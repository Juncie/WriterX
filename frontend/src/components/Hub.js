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

  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS

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
          <Link to="/">
            <h5>{eachNovel.name}</h5>
          </Link>
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

  //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS

  //NEW NOVEL
  const [novel, setNovel] = useState([]);
  const [author, setAuthor] = useState("");
  const handleNovelChange = (e) => {
    let newNovel = { ...novel };
    newNovel[e.target.name] = e.target.value;
    setNovel(newNovel);
  };
  console.log(novel);

  const handleNovelSubmit = async (e) => {
    e.preventDefault();
    // setAuthor(user.name);
    // console.log(author);
    let res = await actions.newNovel({ novel });
    console.log("submitted", novel);
  };

  return (
    // SET DIV CLASS OF NOVELS.MAP TO HUBNOVELS, THE CSS IS ALREADY DONE
    <div className="Hub">
      <Sidebar />
      <h2> {props.user?.name}'s Hub </h2>
      <button onClick={logOut}>LOGOUT</button>
      <section className="hubUserContent">
        <h1>Novels</h1>
        <div className="HubNovels">
          {getEachNovel()}
          <form onSubmit={handleNovelSubmit}>
            <input onChange={handleNovelChange} type="text" name="novel" />
            <input onChange={handleNovelChange} type="text" name="plots" />
            <input type="submit" />
          </form>
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
            <input type="checkbox" id="checkbox-1" />
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
