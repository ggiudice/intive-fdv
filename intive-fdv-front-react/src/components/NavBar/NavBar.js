import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import styles from './NavBar.scss';

class NavBar extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
    }
  }

 
  render () {
    console.log(styles)
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="flag flag-es"></div>
        <NavDropdown title="Idioma" id="basic-nav-dropdown">
          <NavDropdown.Item>Español</NavDropdown.Item>
          <NavDropdown.Item>Ingles</NavDropdown.Item>
          <NavDropdown.Item>Frances</NavDropdown.Item>
        </NavDropdown>
        <span className="pull-rigth d-none d-lg-block"><strong>Gustavo Giudice</strong></span>
      </Navbar>
    )
  }
}

export default NavBar;