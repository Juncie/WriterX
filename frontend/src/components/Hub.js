import React from 'react';
import { Link } from "react-router-dom";
import actions from '../api'
import axios from 'axios'
import { useEffect, useState } from 'react'




const Hub = async () => {

    let [test, setTest] = useState({})

    const getTheTest = async () => {
      let res = await actions.getTest()
      console.log(res.data)
      setTest(res.data)

    }
    
    useEffect(() => {
      getTheTest()
    }, [])
    
    console.log(test)
    
    
    return (
        <div>
          <nav>
              <Link to="/directories">Directories</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/hub">Hub</Link>  
          </nav>  
          
          <h1>Hub</h1>
         
          <button onClick={getTheTest}>CLICK ME</button>
        </div>
    );
}


export default Hub;