import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs style={{background:'black'}}>
      <NavItem>
        <NavLink href="#" active>
          Link
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Mukesh Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem disabled>Nitesh Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Saurav Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Manish Profile</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Education
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Example;