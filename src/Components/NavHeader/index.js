import React from "react";
//bootstrap component
import Navbar from "react-bootstrap/Navbar";

const NavHeader = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavHeader;
