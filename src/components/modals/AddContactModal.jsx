import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddContactModal () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <Button onClick={handleShow}>Add contact</Button>
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
          <div>This is the modal body</div>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddContactModal;