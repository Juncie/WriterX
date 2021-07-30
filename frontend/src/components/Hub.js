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
    props.history.push("/");
  };
  //POP-UP
  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS

  const getEachNovel = () => {
    return props.novels.map((eachNovel, i) => {
      return (
        <div>
            <Link style={{textDecoration:'none'}}to={`/novels/${eachNovel._id}`} key={i}>
          <div className="novelCovers">
              <h3>{eachNovel.title}</h3>
          </div>
            </Link>
        </div>
      );
    });
  };
console.log(props);
  
const getEachNote = () => {
    return props.allNotes.map((eachNote, i)=>{
      return(
        <div className='eachNote'>
          {eachNote.title}
        </div>
      )
    })
  }

  const [open, setOpen] = useState(false);

  //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS

  //NEW NOVEL
  const [novel, setNovel] = useState({});
  const handleNovelChange = (e) => {
    setNovel(([e.target.name] = e.target.value));
  };

  const handleNovelSubmit = async (e) => {
    e.preventDefault();
    let res = await actions.newNovel({ title: novel });
    let newNovs = [...props.novels];
    newNovs.unshift(res.data);
    props.setNovels(newNovs);
  };

  //NEW NOTE
  const [note, setNote] = useState({});

  const handleNoteChange = (e) => {
    let newContent = { ...note };
    newContent[e.target.name] = e.target.value;
    setNote(newContent);
  };
  console.log(note);
  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    let res = await actions.newNote(note);
    let newcontent = [...props.contents];
    newcontent.unshift(res.data);
    props.setContent(newcontent);
  };

  return (
    // SET DIV CLASS OF NOVELS.MAP TO novelCovers, THE CSS IS ALREADY DONE
    <div id="hub">
      <main className="hubMain">
        <div className="bkrd">
          <h1>{user.name}'s Hub</h1>
          <button onClick={logOut}>
            <h2>Log Out</h2>
          </button>
        </div>

        <section className="hubNovelsSect-1">
          <div className="hubNovelHeader">
            <h1>Novels</h1>
          </div>

          <div className="HubSec-2">
            <div className="displayNovels">
              {getEachNovel()}
              <div>
                <div onClick={() => setOpen(!open)} className="novelCovers">
                  <h3>New Novel</h3>
                </div>
                {open && (
                  <form className="newNovelCover" onSubmit={handleNovelSubmit} placeholder="title">
                    <div className="makeNovel">
                      <h1>New Novel</h1>
                      <input
                        style={{ width: "35em", height: "2.5em" }}
                        onChange={handleNovelChange}
                        type="text"
                        placeholder="Novel Title"
                        name="title"
                      />
                      <div className="popupControls">
                        <button >Create Novel</button>
                        <button onClick={() => setOpen(false)}>Close</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="hubNotes">
              <div className="hubNotesCol-1">
                  <h2>Notes</h2>
                {getEachNote()}
              </div>
              <div className="hubNotesCol-2">
                <form onSubmit={handleNoteSubmit}>
                  <input
                    onChange={handleNoteChange}
                    type="text"
                    name="title"
                    placeholder="title your note"
                  />
                  <textarea
                    onChange={handleNoteChange}
                    placeholder="new note..."
                    type="textarea"
                    name="content"
                  ></textarea>
                  <button>Add Note</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='hubNovelsSect-2'>
          <div className='hubNotes'>
           
            <div className='hubNotesCol-2'>
              <form className='newNote'>
                <textarea style={{ resize: 'none' }} name='note' placeholder='New Note...' />
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
        </section> */}
      </main>
    </div>
  );
}
export default Hub;
