import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "./api";
import TheContext from ".././TheContext";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Chapter from "./directories/Chapter";
// import Novel from "./directories/Novel";
// import Plots from "./directories/Plot";

function Sidebar(props) {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
    console.log(user)
  }, []);

  
 
  

  return (
    <div className='sideBar-Container'>
      <nav  className="sidebar-nav">
          <div className='profileBar'>
            <Link to="Auth">
              {/* <h1>{props.match.params.id}</h1> */}
              {props.user?.name}
            </Link>
            {/* <Link to={`/chapter/${props.match.params.novelId}`}>Chapters</Link> */}
            {/* <Link to="/new-characters">Characters</Link> */}
            {/* <Link to={`/novels/${props.match.params.id}`}>Novels</Link>
            <Link to={`/plot/${props.match.params.id}`}>Plots</Link> */}
            <Link to="/hub">Hub</Link>
          </div>
        <div className="toolBar">
          {/* {["Novels", "Chapters", "Characters", "Plots", "Scenes"].map((variant) => (
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
          ))} */}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
