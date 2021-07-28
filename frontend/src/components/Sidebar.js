import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "./api";
import TheContext from ".././TheContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Sidebar(props) {
  let { user, setUser } = useContext(TheContext);

  const userImage = () => user.map(eachUser => <div>{eachUser.id}</div>)
  return (
    <div className='sideBar-Container'>
      <nav  className="sidebar-nav">
          <div className='profileBar'>
            <Link to="Auth">
              {userImage}
              {props.user?.name}
            </Link>
            <Link to="/chapters">Chapters</Link>
            <Link to="/new-characters">Characters</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/plots">Plots</Link>
            <Link to="/scenes">Scenes</Link>
          </div>
        <div className="toolBar">
          {["Novels", "Chapters", "Characters", "Locations", "Plots", "Scenes"].map((variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
