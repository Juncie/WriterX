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
    // SET DIV CLASS OF NOVELS.MAP TO novelCovers, THE CSS IS ALREADY DONE
    <div id='hub'>
        <Sidebar />
      <main className='hubMain'>
       
        <div className='bkrd'>
          <h1>{user.name}'s Hub</h1>
        </div>
        <section className='hubNovelsSect-1'>
          <div className='hubNovelHeader'>
            <h1>Novels</h1>
          </div>
          <div className='displayNovels'>
          {getEachNovel()}

          <form onSubmit={handleNovelSubmit}>
            <label for="title">New Novel</label>
            <input onChange={handleNovelChange} type="text" name="title" />
            <input type="submit" />
          </form>
        </div>
        </section>
        <section className='hubNovelsSect-2'>
          <div className='hubNotes'>
            <div className='hubNotesCol-1'>
              <h4>Notes</h4>
            </div>
            <div className='hubNotesCol-2'>
              <form className='newNote'>
                <textarea style={{resize:'none'}}name='note'placeholder='New Note...' />
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
      </main>
    
    </div>
  );
}
export default Hub;
