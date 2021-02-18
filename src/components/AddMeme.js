import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ModalCenter(props){
    return(
        <Modal
        {...props}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Modal heading...
                </Modal.Title >
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

export default function AddMeme(){
    const[modalShow, setModalShow] = React.useState(false)
    return(
        <>
        <Button style={{marginTop:"100px"}} variant="primary" onClick={() => setModalShow(true)}>
            Launch
        </Button>

        <ModalCenter
        show={modalShow}
        onHide={()=> setModalShow(false)}
         />
        
        </>
    )
}