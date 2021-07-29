import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "./api";
import TheContext from ".././TheContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Sidebar(props) {
  const [novels, setNovels] = useState([]);
  useEffect(() => {
    actions.getUserNovels().then((res) => {
      // console.log(res.data);
      setNovels(res.data);
    });
  }, []);

  const getEachNovel = () => {
    return novels.map((eachNovel, i) => {
      return (
        <div className="novelCovers">
          <Link to={`/novels/${eachNovel._id}`} key={i}>
            <h5>{eachNovel.title}</h5>
          </Link>
          {/* SET BACKGROUND CHANGE FUNCTION HERE */}
        </div>
      );
    });
  };


  let { user, setUser } = useContext(TheContext);

  
  const userImage = () => user.map((eachUser) => <div>{eachUser.id}</div>);
  return (
    <div className="sideBar-Container">
      {/* <nav className='sideBarNav'> */}
        <div className='sideBarCol-1'>
          <Link to="/hub">
          user
            {/* {userImage}
            {props.user?.name} */}
          </Link>
          <Link to="/novels">Novels</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/new-characters">Characters</Link>
          {/* <Link to="/locations">Locations</Link>
          <Link to="/plots">Plots</Link>
          <Link to="/scenes">Scenes</Link> */}
        </div>

        <div className='sideBarCol-2'>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Novels"
          className="mt-2"
        >
        <Dropdown.Item href="#/action-1" active>
          {getEachNovel()}
        </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Chapters"
          className="mt-2"
        >
        <Dropdown.Item href="#/action-1" active>
          chapters
        </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Characters"
          className="mt-2"
        >
        <Dropdown.Item href="#/action-1" active>
          Characters
        </Dropdown.Item>
        </DropdownButton>

        {/* <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Chapters"
          className="mt-2"
        >
        <Dropdown.Item href="#/action-1" active>
          chapters
        </Dropdown.Item>
        </DropdownButton> */}

        
          {/* {["Novels", "Chapters", "Characters", "Locations", "Plots", "Scenes"].map((variant) => (
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
      {/* </nav> */}
    </div>
  );
}

export default Sidebar;
