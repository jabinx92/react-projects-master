import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';

const Navigation = () => {
  const handleClick = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <img src={logo}></img>
    <Nav variant="pills" activeKey="1" onSelect={handleClick}>
    <NavDropdown title="Products" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">Payment</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Terminal</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Connect</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Developers" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">Plugins</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Libraries</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Help</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">Billings</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Company" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">About</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Customers</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Button variant="dark">Sign In</Button>{' '}
    </>
    )
}



export default Navigation
