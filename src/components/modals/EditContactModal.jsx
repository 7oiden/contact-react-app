import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditContactForm from "../forms/EditContactForm";
import { EditIcon } from "../icons/MaterialIcons";

function EditContactModal (props) {
    const {id, firstName, lastName, email} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <button onClick={handleShow} className="btn-icon-box"><EditIcon color="#000000" size="2rem" /></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{firstName} {lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm 
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default EditContactModal;