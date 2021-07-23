import { React, useState, useEffect } from "react";
import actions from "../api";
import Sidebar from '../Sidebar'
import Display from "../Display"
import Editor from "../Editor"
import './Canvas.css'

function Canvas() {
  const [novel, setNovel] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.newNovel({novel:novel,name:'BlahBLah'}).then((res) => {
      console.log("hello", res.data);
      // setNovel("title", novel);
    });
    console.log("submitted", novel);
  };

  const handleChange = (e) => {
    setNovel(e.target.value);
  };

  return (
    <div>
    <div className="bars">
    <Sidebar />
    <div className="notes">
    <Display />
    </div>
    </div>
    <Editor />
      {/* <div className="canvas">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="title" />
        <button>CLICK ME</button>
      </form>
      </div> */}
    </div>
  );
}

export default Canvas;
