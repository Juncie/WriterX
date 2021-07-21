import React from 'react';
import { Link } from "react-router-dom";

function Hub(props) {
    return (
        <div>
          <nav>
              <Link to="/directories">Directories</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/hub">Hub</Link>  
          </nav>  
          <h1>Hub</h1>
        </div>
    );
}

export default Hub;