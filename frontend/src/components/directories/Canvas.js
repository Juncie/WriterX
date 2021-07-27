import { React, useState, useEffect } from "react";
import actions from ".././api";
import Sidebar from "../Sidebar";
import Display from "../Display";
import Editor from "../Editor";
import "./Canvas.css";

function Canvas(props) {
  const [novel, setNovel] = useState({});
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    actions.getOneNovel(props.match.params.id).then((res) => {
      console.log(res.data);
      setNovel(res.data);
    });
  }, []);

  const handleChapterChange = (e) => {
    let newChapter = { ...chapter };
    newChapter[e.target.name] = e.target.value;
    setChapter(newChapter);
    console.log(chapter);
  };

  const handleChapterSubmit = async (e) => {
    e.preventDefault();
    chapter.novelId = props.match.params.id;
    let res = await actions.newChapter(chapter);
    console.log(res.data);
  };

  const getUserNovel = () => {
    return (
      <div>
        <h1>{novel.title}</h1>
      </div>
    );
  };
  return (
    <div>
      {getUserNovel()}
      <div className="bars">
        <form onSubmit={handleChapterSubmit}>
          <input onChange={handleChapterChange} type="text" name="title" />
          <input onChange={handleChapterChange} type="text" name="chapter" />
          <input onChange={handleChapterChange} type="textarea" name="article" />
          <input onChange={handleChapterChange} type="textarea" name="description" />
          <input type="submit" />
        </form>
        <Sidebar />
        <div className="notes">{/* <Display /> */}</div>
      </div>
      <Editor />
    </div>
  );
}

export default Canvas;
