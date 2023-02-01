import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditContactModal (props) {
    const {id, firstName, lastName, email} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <Button onClick={handleShow}>Notes</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">This is your notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body</p>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default EditContactModal;