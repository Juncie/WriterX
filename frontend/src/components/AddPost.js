import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import actions from '../api'

function AddPost(props) {

    let [post, setPost] = useState('')
    let history = useHistory()

    const handleChange = e => {
        setPost(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();

        let res = await actions.addPost({ post })
        history.push('/') //props.history.push is also an option
    }

    return (
        <div>
            <h3>Add Post</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Enter a post" />
                <button>TORO</button>
            </form>
        </div>
    );
}

export default AddPost;