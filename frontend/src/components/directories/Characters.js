import { React, useState, useEffect } from 'react';
import actions from '../../api';
//import { useHistory } from 'react-router-dom';
//import axios from 'axios'

function Characters(props) {
    const [characters, setCharacters] = useState({})

    //let history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted", characters);
        actions.characters().then((res) => {
            setCharacters("name", characters);
        });
        // let res = await actions.postAllCharacters({ characters })
        // history.push('/add-character')
        // axios.post('http://localhost:3000/Characters', characters).then((res) => {
            //console.log(res);
            console.log("submitted", characters);
        };

    const handleChange = (e) => {
        setCharacters(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>Add Character</button>
            </form>
        </div>
    );
}

export default Characters;