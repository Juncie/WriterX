import { useEffect, useState } from "react";
import Sidebar from '../Sidebar'
import actions from "../api"
import { Link } from "react-router-dom"
import QuillCanvas from '../QuillCanvas';
import Editor from '../Editor';


function Locations(props) {
    const [location, setLocation] = useState({})
    const [getLocation, setGetLocation] = useState([])
    const handleChange = (e) => {
        setLocation(e.target.value);
    }
    console.log(location)
    return (
        <div>
            <Sidebar />
            <h2>Locations {props.match.params.id}</h2>
            <form >
                <input onChange={handleChange} name="name" type="text"/>
                <button>submit</button>
            </form>
        </div>
    );
}

export default Locations;