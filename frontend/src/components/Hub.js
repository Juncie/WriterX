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
      // console.log(res.data);
      setNovels(res.data);
    });
  }, []);

  const getEachNovel = () => {
    return novels.map((eachNovel, i) => {
      return (
        <div className="novelCovers">
          <Link to={`/novels/${eachNovel._id}`} key={i}>
            <h5>{eachNovel.title}</h5>
          </Link>
          {/* SET BACKGROUND CHANGE FUNCTION HERE */}
        </div>
      );
    });
  };

  //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS //POST REQUESTS

  //NEW NOVEL
  const [novel, setNovel] = useState({});
  const handleNovelChange = (e) => {
    setNovel(([e.target.name] = e.target.value));
  };

  const handleNovelSubmit = async (e) => {
    e.preventDefault();
    console.log(novel);
    let res = await actions.newNovel({ title: novel });

    console.log(res, novel);
  };

  return (
    // SET DIV CLASS OF NOVELS.MAP TO HUBNOVELS, THE CSS IS ALREADY DONE
    <div id="Hub">
    <div className='hubContainer'>
      <Sidebar />
     
      <section className="hubUserContent">
        <h1>Novels</h1>
        <div className="HubNovels">
          {getEachNovel()}
        </div>
        <form onSubmit={handleNovelSubmit}>
         
            <input onChange={handleNovelChange} placeholder='Title Your New Novel' type="text" name="title" />
            <input type="submit" />
          </form>
        <section className="hubSection2">
          <div className="hubNotes">
            <div className="parentNewNote">
              <div className="hubNotesList">
              </div>
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
    </div>
  );
}
export default Hub;