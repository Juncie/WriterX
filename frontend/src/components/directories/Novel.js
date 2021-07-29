import { React, useState, useEffect } from "react";
import actions from "../api";
import Sidebar from "../Sidebar";
import Editor from "../Editor";
import { Link } from "react-router-dom";
import QuillCanvas from "../QuillCanvas";




function Novel(props) {
  const [novel, setNovel] = useState({});
  const [chapters, setChapters] = useState([]);
  const [plots, setPlots] = useState({});
  const [chapter, setChapter] = useState({});
  

  //PLOTS POST
  const handlePlotSubmit = async (e) => {
    e.preventDefault();
    plots.plotId = props.match.params.id;
    let res = await actions.newPlot(plots);
    console.log(res.data);
  };

  const handlePlotChange = (e) => {
    let newPlots = { ...plots };
    newPlots[e.target.name] = e.target.value;
    setPlots(newPlots);
    
  };

  //PLOTS GET
  const [onePlot, setOnePlot] = useState({});

  useEffect(() => {
    console.log(props);
  }, []);
  const showChapters = () => {
    return chapters.map((eachChapter, i) => {
      return (
        <div className="eachChapter">
          <Link to={`/chapter/${eachChapter._id}`} key={i}>
            <h5>{eachChapter.title}</h5>
          </Link>
            <h5>{eachChapter.article}</h5>
        </div>
      );
    });
  };  

  //NOVELS
  useEffect(() => {
    actions.getOneNovel(props.match.params.id).then((res) => {
      console.log(res.data);
      setNovel(res.data.novel);
      setChapters(res.data.chapters);
    }); 
  }, []);
const [allChapters, setAllChapters] = useState([])
  
useEffect(() => {
    actions.getAllChapters(props.match.params.id).then((res)=>{
      console.log(res.data);
      setAllChapters(res.data)
    })
  }, []);

const showAllChapters = () => {
  return allChapters.map((eachAllChapter)=>{
    return(
      <div>{eachAllChapter.title}</div>
    ) 
  })
}

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
      <div className='hub-novel-title'>
        <h1>{novel.title}</h1>
      </div>
    );
  };
  //EDITOR STATES
  const [content, setContent] = useState('')
//   const [file, setFile] = useState([])
// //EDITOR ON CHANGE
  const onEditorChange = value => setContent(value)
  const onEditorSubmit = e => {
    e.preventDefault()
   console.log(content);
   console.log(props.match.params);
   actions.updatechapterArticle({article: content, novelId: props.match.params.id}).then((res)=>{
     console.log(res.data);
   })
  }
console.log(content);



  return (
    <div className='novelCanvasParent'>
      <section className='novelCanvas'>
           <Sidebar />
        <div className='canvasView'>
          <div>
            <button onClick={onEditorSubmit}>SAVE ME</button>
            {showAllChapters()}
            {getUserNovel()}
            {showChapters()}
          </div>
          <div className="bars">
            {/* <form onSubmit={handleChapterSubmit}>
              <label for='title'>Title</label>
              <input onChange={handleChapterChange} type="text" name="title" />
              <label for='description'>description</label>
              <input onChange={handleChapterChange} type="textarea" name="description" id='description' />
              <input type="submit" />
            </form> */}
        </div>
          {/* <form onSubmit={handlePlotSubmit}>
          <input onChange={handlePlotChange} type="text" name="title" />
            <input onChange={handlePlotChange} type="text" name="characters" />
            <input onChange={handlePlotChange} type="textarea" name="summary" />
            <input type="submit" />
          </form>
       */}
            {/* <div id="#chapterEditor">
              <QuillCanvas
              placeholder={props.match.params.id}
              onEditorChange={onEditorChange}
              // 
              />
            </div> */}
          </div>
      
    </section>
    </div>
  );
}

export default Novel;
