import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Display(props) {
    return (
        <div>
        <DropdownButton id="dropdown-basic-button" title="Novels">
          <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Chapters">
          <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Article</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Description</Dropdown.Item>
        </DropdownButton>


        <DropdownButton id="dropdown-basic-button" title="Characters">
          <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Age</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Image</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Bio</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Description</Dropdown.Item>
        </DropdownButton>
        
        <DropdownButton id="dropdown-basic-button" title="Locations">
          <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Image</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Plots">
          <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Characters</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Description</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Scenes">
          <Dropdown.Item href="#/action-1" >Name</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Notes</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Characters</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-5">Summary</Dropdown.Item>
        </DropdownButton>


        {/* {['Novels', 'Chapters', 'Characters', 'Locations', 'Plots', 'Scenes'].map(
                (variant) => (
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
                )
            )} */}
        </div>
    );
}

export default Display;