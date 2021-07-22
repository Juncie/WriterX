import { React, useState, useEffect } from "react";
import actions from "../../api";
import axios from "axios";

function Canvas() {
  const [novel, setNovel] = useState("");

  const handleChange = (e) => {
    setNovel(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("is this working");
    e.preventDefault();
    actions.newNovel({novel:novel,name:'BlahBLah'}).then((res) => {
      console.log("hello", res.data);
      // setNovel("title", novel);
    });
  };
  console.log("submitted", novel);

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
