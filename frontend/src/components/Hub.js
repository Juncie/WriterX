import { useContext, useEffect, useState } from "react";
import TheContext from ".././TheContext";
import actions from "./api";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import ReactCircleModal from 'react-circle-modal'

//
function Hub(props) {
  //Log Out
  let { user, setUser } = useContext(TheContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  //POP-UP

  
// GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS  // GET REQUESTS

  const getEachNovel = () => {
    return props.novels.map((eachNovel, i) => {
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
    let res = await actions.newNovel({ title: novel });
    let newNovs = [...props.novels]
    newNovs.unshift(res.data)
    props.setNovels(newNovs)
  };

const popUp = () =>{
 return( 
   <div className='popUp'>
      <input type='text' name='title'/>
      <button>Start a New Adventure</button>
   </div>
 )
}
  return (
    // SET DIV CLASS OF NOVELS.MAP TO novelCovers, THE CSS IS ALREADY DONE
    <div id='hub'>
      {/* <Sidebar /> */}
      <main className='hubMain'>

        <div className='bkrd'>
          <h1>{user.name}'s Hub</h1>
        </div>
        
        
        
        <section className='hubNovelsSect-1'>
          
          <div className='hubNovelHeader'>
            <h1>Novels</h1>
          </div>
          
          <div className='HubSec-2'>
            <div className='displayNovels'>
              {getEachNovel()}
              <h3 style={{color:'black'}}>Or...</h3>
            {/* <div>
             <button className='novelCovers' onClick={popUp}>
               <h3>New Novel</h3>
             </button>
            
            </div> */}
            </div>
            <div className='hubNotesCol-1'>
                <h4>Notes</h4>
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
