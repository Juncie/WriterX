import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import actions from "../api"
import { Link } from "react-router-dom"
import QuillCanvas from '../QuillCanvas';
import Editor from '../Editor';

function Chapters(props) {
  let [chapterPlot, setChapterPlot] = useState([])
  useEffect(() => {
    actions.getChapterPlots(props.match.params.id).then((res) => {
  setChapterPlot(res.data)
    })
  }, [])
  const showChapterPlots = () => {
  return chapterPlot.map((eachPlot, i) => {
    return (
      <div>
      <Link to={`/plot/${eachPlot._id}` } key={i}>
      <h3>{eachPlot.title}</h3>
      </Link>
      </div>
    ) 
  })
  }
  //console.log(chapterPlot)
  let [plot, setPlot] = useState({}) 
  const handleChange = (e) => {
  let newPlot = {...plot}
  newPlot[e.target.name] = e.target.value
  setPlot(newPlot)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    plot.chapterId=props.match.params.id
    let res = await actions.newPlot(plot)
    console.log(res)
  }
  console.log(plot)
  //EDITOR STATES
    const [content, setContent] = useState('')
    const [file, setFile] = useState([])
  //EDITOR ON CHANGE
    const onEditorChange = value => setContent(value)
  console.log(content);
    const onFilesChange = files => setFile(files)
   
    //AUTOSAVES
  const autoSave = async () => {
    actions.updatechapterArticle(props.match.params.chapterId).then((res)=>{
      console.log(res.data);
      // chapterId=
   })
  }
  
   return (
    <div>
      <div id='novelEditor'>
        <Sidebar  />
            <QuillCanvas
        placeholder={props.match.params.chapterId}
        onChange={onEditorChange}
        onFilesChange={onFilesChange}
            />
      </div>

      <h1>My Chapter{ props.match.params.id }</h1>
      {/* <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" ></input>
        <button>submit</button>
      </form> */}
      {/* {showChapterPlots()} */}
    </div>
  );
}

export default Chapters;
