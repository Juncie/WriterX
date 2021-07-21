import React from 'react';
import { Link } from "react-router-dom";
import actions from '../api'
import axios from 'axios'
import { useEffect, useState } from 'react'




const Hub = async () => {
//     let [test, setTest] = useState({})

//     let res = await actions.getUser()
//     setTest(res.data)
//   }
  
//   useEffect(() => {
//     setTest()
//   }, [])

 const getPosts =  () => {
    return (
        <div>
          <nav>
              <Link to="/directories">Directories</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/hub">Hub</Link>  
          </nav>  
          <h1>Hub</h1>
          <button onClick={getPosts}>CLICK ME</button>
        </div>
    );
}
}

export default Hub;