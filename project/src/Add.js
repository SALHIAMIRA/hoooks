import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Add = ({addMovie}) => {
    const[newMovie,setNewMovie]=useState({
    title: "",
    description:"",
    postUrl:"",
    rate: 1,
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
       Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus name='title' onChange={handleChange} value={newMovie.title}
              />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Discription</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' onChange={handleChange} value={newMovie.description} />
            </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> postUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                autoFocus
                name='postUrl' onChange={handleChange} value={newMovie.postUrl}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rate"
                autoFocus name='rate' onChange={handleChange} value={newMovie.rate}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
