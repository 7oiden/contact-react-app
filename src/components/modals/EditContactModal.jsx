import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditContactForm from "../forms/EditContactForm";

function EditContactModal(props) {
  const { id, firstName, lastName, email, phoneNumber, handleRerender } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Edit contact</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {firstName} {lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            setShow={setShow}
            handleRerender={handleRerender}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditContactModal;
