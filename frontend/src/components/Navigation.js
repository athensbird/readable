import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';

function cap(word) {
  const firstPart = word[0].toUpperCase();
  const secondPart = word.slice(1, word.length);
  return firstPart + secondPart;
}

function Navigation(props) {
  const { categories } = props;
  let i = 0;
  return (
    <Navbar>
        <Nav className="nav-bar">
          <NavItem key={9900} className="NavItem" href="/">Home</NavItem>
          {categories && categories.map(c => {
            return (
              <NavItem key={i++} className="navitems" href={`/${c.name}/posts`}>
                {cap(c.name)}
              </NavItem>
            )})}
        </Nav>
      </Navbar>
  );
}

export default Navigation;
