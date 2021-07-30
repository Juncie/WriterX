import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import actions from "../api";
import { Link } from "react-router-dom";
import QuillCanvas from "../QuillCanvas";
import Editor from "../Editor";

function Chapters(props) {
  let [chapter, setChapter] = useState([]);
  useEffect(() => {
    actions.getChapter(props.match.params.id).then((res) => {
      console.log(res);
      setChapter(res.data);
      setArticle(res.data.article || "");
    });
  }, []);
  const [article, setArticle] = useState({});
  //console.log(chapterPlot)
  const handleChange = (e) => {
    // let newArticle = { ...article };
    // newArticle[e.target.name] = e.target.value;
    // console.log(article)
    setArticle(e.target.value);
  };
  //EDITOR STATES
  const [content, setContent] = useState("");
  const [file, setFile] = useState([]);
  //EDITOR ON CHANGE
  const onEditorChange = (value) => setContent(value);
  console.log(content);
  const onFilesChange = (files) => setFile(files);

  //AUTOSAVES
  const autoSave = async () => {
    //   actions.updatechapterArticle(props.match.params.chapterId).then((res)=>{
    //     console.log(res.data);
    //     JSON.stringify(res.data)
    //  })
    console.log(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(article, "article", props.match.params);

    let res = await actions.updatechapterArticle({ chapterId: props.match.params.id, article });
    console.log(res);
    props.history.goBack();
  };

  return (
    <div>
      <div id="novelEditor">
        <h1>{chapter?.title}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <button>submit</button>
        <textarea id="editor" value={article} onChange={handleChange} name="content" type="text"></textarea>
      </form>
    </div>
  );
}

export default Chapters;
