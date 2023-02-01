import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { NoteIcon } from "../icons/MaterialIcons";
import Button from "react-bootstrap/Button";

function EditContactModal (props) {
    const {id, firstName, lastName, email} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <button onClick={handleShow} className="btn-icon-box"><NoteIcon color="#000000" size="1.5rem" /></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body</p>
          <textarea></textarea>
          <Button>Add note</Button>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default EditContactModal;