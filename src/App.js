import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import NavDropdown from 'react-bootstrap/NavDropdown'
import Scroll from './components/Scroll'


function ModalCenter(props){
  return(
    <Modal
    {...props}
    size ="lg"
    arial-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading...
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          lorem
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  )
}

function App() {

  const[modalShow, setModalShow]= useState(false)

  return (
    <>
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">friend-Xone</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Updates</Nav.Link>
      <Nav.Link onClick={()=>setModalShow(true)}>Add</Nav.Link>
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
<ModalCenter
        show={modalShow}
        onHide={()=> setModalShow(false)}
         />
  <Scroll />


    </>

  );
}

export default App;
