import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import NavDropdown from 'react-bootstrap/NavDropdown'
import Scroll from './components/Scroll'
import Container from 'react-bootstrap/esm/Container'

function App() {
  return (
    <>
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">friend-Xone</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Updates</Nav.Link>
      <Nav.Link href="#pricing">Add</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Uhuru</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Oooliskia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tanga tanga</NavDropdown.Item>

      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
       joramWells@gmail.com
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <Scroll />


    </>

  );
}

export default App;
