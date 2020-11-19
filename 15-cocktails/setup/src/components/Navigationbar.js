import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { Button, Nav, Navbar, FormControl, Form, NavDropdown } from 'react-bootstrap'


const Navigationbar = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src={logo} alt="My logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
    </>
  )
}

export default Navigationbar
