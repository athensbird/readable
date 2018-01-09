import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";

function Navigation() {
  return (
    <Navbar>
        <Nav>
          <NavItem eventKey="1" className="navitems" href="/categories">Home</NavItem>
          <NavItem eventKey="2" className="navitems" href="/posts">Posts</NavItem>
          <NavItem eventKey="3" className="navitems" href="/addpost">Add a Post</NavItem>
        </Nav>
      </Navbar>
  );
}

export default Navigation;
