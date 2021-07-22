import { React, useState, useEffect } from "react";
import actions from "../api";

function Canvas() {
  const [novel, setNovel] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    actions.newNovel().then((res) => {
      setNovel("title", novel);
      console.log(res);
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
