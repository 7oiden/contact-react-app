import Card from "react-bootstrap/Card";
import DeleteContactBtn from "./DeleteContactBtn";
import EditContactModal from "../modals/EditContactModal";
import NotesModal from "../modals/NotesModal";

function ContactCard(props) {
  const { id, firstName, lastName, email, handleRerender, phoneNumber } = props;

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            {firstName} {lastName}
          </Card.Title>
          <Card.Text>
            <span>{email}</span>
          </Card.Text>
          <Card.Text>
            <span>{phoneNumber}</span>
          </Card.Text>
          <NotesModal />
          <DeleteContactBtn
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            handleRerender={handleRerender}
          />
          <EditContactModal
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            handleRerender={handleRerender}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default ContactCard;
