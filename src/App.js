import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavDropdown from "react-bootstrap/NavDropdown";
import Scroll from "./components/Scroll";
import {GoogleLogin} from 'react-google-login'

const responseGoogle = (response) => {
  const data = response
  const profile = data.profileObj
  console.log(profile)
}



function ModalUseDetails(props){
  return(
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-userdetails"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-userdetails">
          Login details...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        hey guys
      </Modal.Body>
      <Modal.Footer>
      <GoogleLogin
    clientId="266388441735-5a4sfpj0lpk8nvjkf52ppoqqul0139st.apps.googleusercontent.com" 
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  )
}



function ModalCenter(props) {
  return (
    <Modal
      {...props}
      size="md"
      arial-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading...
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2} htmlFor="meme_txt">Text</Form.Label>
            <Col sm={10}>
            <Form.Control
              type="text"
              id="meme_txt"
              
              aria-describedby="memeInput"
            />
            </Col>

          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const[profile, setProfile]= useState({})
  const [modalShow, setModalShow] = useState(false);
  const [modalShowLogin, setModalShowLogin] = useState(false);

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">friend-Xone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Updates</Nav.Link>
            <Nav.Link onClick={() => setModalShow(true)}>Add</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Uhuru</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Oooliskia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tanga tanga
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">


            </Nav.Link>
            <NavDropdown title="a/c" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={() => setModalShowLogin(true)} >Signin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Signout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ModalCenter show={modalShow} onHide={() => setModalShow(false)} />
      <ModalUseDetails show={modalShowLogin} onHide={() => setModalShowLogin(false)}  />
      <div style={{marginTop:"100px"}}>


      </div>
      <Scroll />
    </>
  );
}

export default App;
