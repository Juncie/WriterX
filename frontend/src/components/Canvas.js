import { React, useState, useEffect } from "react";
import actions from "../api";

function Canvas() {
  const [novel, setNovel] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:frontend/src/components/Canvas.js
    console.log(e);
    actions.newNovel().then((res) => {
      setNovel("title", novel);
      console.log(res);
=======
    actions.newNovel({novel:novel,name:'BlahBLah'}).then((res) => {
      console.log("hello", res.data);
      // setNovel("title", novel);
>>>>>>> a35849c6d6ab6138e5625b82eee7797e316350d9:frontend/src/components/directories/Canvas.js
    });
    console.log("submitted", novel);
  };

  const handleChange = (e) => {
    setNovel(e.target.value);
  };

  return (
    <div>
      <h1>Canvas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="title" />
        <button>CLICK ME</button>
      </form>
    </div>
  );
}

export default Canvas;
