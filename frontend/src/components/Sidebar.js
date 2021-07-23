import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar(props) {
    return (
        <div>
          <nav>
              {/* <Link to="/welcome">Home</Welcome> */}
              
              <Link to ="Auth"><img src="https://styles.redditmedia.com/t5_kwwt3/styles/communityIcon_4g3bzdpyw2r41.png"/>Name</Link>
              <Link to="/hub">Hub</Link>
              <Link to="/community-board">Community Board</Link>
              <Link to="/canvas">Canvas</Link>
              <Link to="/novels">Novels</Link>
              <Link to="/chapters">Chapters</Link>
              <Link to="/new-characters">Characters</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/plots">Plots</Link>
              <Link to="/scenes">Scenes</Link>
          </nav>
            
        </div>
    );
}

export default Sidebar;