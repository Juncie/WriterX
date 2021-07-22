import React, { useState, useEffect } from 'react';
import actions from '../../api';
import { useHistory } from 'react-router-dom'

function Characters(props) {
    const [characters, setCharacters] = useState([])
    let history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault();
        let res = await actions.postAllCharacters({ characters })
        history.push('/add-character')
        console.log("submitted", characters);
    };

    const handleChange = (e) => {
        setCharacters(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}type="text" />
                <button>Add Character</button>
            </form>
        </div>
    );
}

export default Characters;