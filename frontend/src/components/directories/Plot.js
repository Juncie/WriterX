import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import actions from "../api"
import { Link } from "react-router-dom"
import QuillCanvas from '../QuillCanvas';
import Editor from '../Editor';

function Plots(props) {

  let [chapterPlot, setChapterPlot] = useState([])
  useEffect(() => {
    actions.getChapterPlots(props.match.params.id).then((res) => {
  setChapterPlot(res.data)
    })
  }, [])
  const showChapterPlots = () => {
  return chapterPlot.map((eachPlot) => {
    return (
      <div>
      <Link to={`/plot/${eachPlot._id}`}>
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
  
  return (
    <div>
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" ></input>
        <input onChange={handleChange} name="summary" type="text" ></input>
        <button>submit</button>
      </form>
      {showChapterPlots()}

      <h2>plot {props.match.params.id}</h2>
    </div>
  );
}

export default Plots;
