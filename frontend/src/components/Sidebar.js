import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "./api";
import TheContext from ".././TheContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Sidebar(props) {
  // const [novels, setNovels] = useState([]);
  // useEffect(() => {
  //   actions.getUserNovels().then((res) => {
  //     // console.log(res.data);
  //     setNovels(res.data);
  //   });
  // }, []);
  console.log(props)

  const getEachNovel = () => {
    return props.novels.map((eachNovel, i) => {
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


  const getEachChapter = () => {
    return props.allChapters.map((eachChapter, i) => {
      return (
        <div className="novelCovers">
          <Link to={`/chapter/${eachChapter._id}`} key={i}>
            <h5>{eachChapter.title}</h5>
          </Link>
          {/* SET BACKGROUND CHANGE FUNCTION HERE */}
        </div>
      );
    });
  };


  const getEachCharacter = () => {
    return props.allCharacters.map((eachCharacter, i) => {
      return (
        <div className="novelCovers">
          {/* <Link to={`/chapter/${eachCharacter._id}`} key={i}> */}
          <h5>{eachCharacter.name}</h5>
          {/* </Link> */}
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
      {/* <div className='sideBarCol-1'>
          <Link to="/hub">
          user

          </Link>
          <Link to="/novels">Novels</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/new-characters">Characters</Link>
          
        </div> */}

      <div className='sideBarCol-2'>
        <Link to="/hub">Hub</Link>
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
            {getEachChapter()}
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
            {getEachCharacter()}
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
