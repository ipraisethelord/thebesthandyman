import React from "react";
import { Modal, Button } from "react-bootstrap";
import Gallery from "../../album";
const ImagePopup = ({ show, handleClose, imageUrl, desc, photos }) => {
  
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{desc}</Modal.Title>
      </Modal.Header>
      <Modal.Body>      
       
        <Gallery photos={photos}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePopup;
