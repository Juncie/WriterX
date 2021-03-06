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
  const [character, setCharacter] = useState({});
  const [characters, setCharacters] = useState([]);
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


  const showChapters = () => {
    return chapters.map((eachChapter, i) => {
      return (
        <div className="eachChapter">
          <Link to={`/chapter/${eachChapter._id}`} key={i}>
            <h1>{eachChapter.title}</h1>
          <h5>{eachChapter.article}</h5>
          </Link>
          <hr />
        </div>
      );
    });
  };


  const showCharacters = () => {
    return characters.map((eachCharacter, i) => {
      return (
        <div className="eachCharacter">
          {/* <Link to={`/chapter/${eachCharacter._id}`} key={i}> */}
          <h4>{eachCharacter.name}</h4>
          <hr />
          <h5>{eachCharacter.bio}</h5>
        </div>
      );
    });
  };

  //NOVELS
  useEffect(() => {
    actions.getOneNovel(props.match.params.id).then((res) => {
      console.log(res.data, '???');
      setNovel(res.data.novel);
      setChapters(res.data.chapters);
      setCharacters(res.data.characters)
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
    console.log(chapter);
    let res = await actions.newChapter(chapter);
    console.log(res.data);

    let newChapters = [...chapters]
    newChapters.push(res.data);
    setChapters(newChapters)
    props.setAllChapters(newChapters)
    //
  };

  const getUserNovel = () => {
    return (
      <div className='hub-novel-title'>
        <h1>{novel?.title}</h1>

      </div>
    );
  };


  const handleCharacterChange = e => {
    let newCharacter = { ...character }
    newCharacter[e.target.name] = e.target.value
    setCharacter(newCharacter);
  }

  const handleCharacterSubmit = e => {
    e.preventDefault()

    character.novelId = props.match.params.id
    actions.addCharacter(character).then(res => {
      console.log(res.data)
      let newCharacters = [...characters]
      newCharacters.push(res.data)
      setCharacters(newCharacters)
      props.setAllCharacters(newCharacters)
    })

  }
  const deleteNovel = () => {
    actions.deleteOneNovel(props.novels).then((res) => {
      console.log("Deleted", res);
      props.history.goBack();
    });
  };

  return (
    <div className='novelCanvasParent'>
      <section className='novelCanvas'>
        <div className='canvasView'>
        
          <div className="bars">
            <h2 className='deleteNov'>Delete Novel<img width='35px'src='https://img.icons8.com/m_outlined/2x/delete-trash.png' onClick={deleteNovel} alt='Delete'/>
</h2>
            <h2>Make a new chapter! </h2>
            <form onSubmit={handleChapterSubmit}>
              <input onChange={handleChapterChange} placeholder="Chapter Title" type="text" name="title" />
              <input type="submit" />
            </form>



            <form onSubmit={handleCharacterSubmit} className="addChapter">
              <label for='title'>Character</label>
              <input onChange={handleCharacterChange} placeholder="name" type="text" name="name" />
              <textarea onChange={handleCharacterChange} placeholder="bio" type="text" name="bio" />
              <textarea onChange={handleCharacterChange} placeholder="description" type="text" name="description" />



              <input type="submit" />
            </form>
          </div>

          <div className="showChapters">
            {getUserNovel()}
            <hr />
            {showChapters()}

            <h2>Characters:</h2>
            <div>{showCharacters()}</div>
          </div>
  
        </div>

      </section>
    </div>
  );
}

export default Novel;
