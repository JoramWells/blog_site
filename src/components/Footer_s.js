import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer_s(){
    return(
        <>
<Navbar className="bg-light " fixed="bottom">

  <Form>
      <Form.Group>
      <Form.Control  type="text" placeholder="Search" />
      </Form.Group>

  </Form>
</Navbar>
        </>
    )
}

export default Footer_s;