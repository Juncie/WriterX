import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import actions from "../api"
import { Link } from "react-router-dom"

function Chapters(props) {
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
    let res = await actions.newPlot({chapterId:props.match.params.id, title:plot.title})
    console.log(res)
  }
  console.log(plot)
   return (
    <div>
      <Sidebar className="notes" />
      <h1>My Chapter{ props.match.params.id }</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" ></input>
        <button>submit</button>
      </form>
      {showChapterPlots()}
    </div>
  );
}

export default Chapters;
