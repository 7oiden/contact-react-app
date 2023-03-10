import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddContactForm from "../forms/AddContactForm";

function AddContactModal ( {handleRerender} ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddContact = () => {
      // Add contact logic here
      setShow(false);
  };

    return (
    <>
      <Button onClick={handleShow} className="add-contact-btn">Add contact</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add a contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddContactForm 
          handleAddContact={handleAddContact}
          handleRerender={handleRerender} />
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddContactModal;