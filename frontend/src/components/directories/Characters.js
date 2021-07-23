import { React, useState, useEffect } from 'react';
import actions from '../api';
import Sidebar from '../Sidebar'
//import { useHistory } from 'react-router-dom';
//import axios from 'axios'

function Characters(props) {
    const [characters, setCharacters] = useState("")

    //let history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await actions.postAllCharacters({ characters })
        console.log("submitted", characters);
        };

    const handleChange = (e) => {
        setCharacters(e.target.value);
    };

    return (
        <div>
        <Sidebar />
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>Add Character</button>
            </form>
        </div>
    );
}

export default Characters;