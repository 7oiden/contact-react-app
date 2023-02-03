import Card from "react-bootstrap/Card";
import DeleteContactBtn from "./DeleteContactBtn";
import EditContactModal from "../modals/EditContactModal";
import NotesModal from "../modals/NotesModal";
import { StarFilledIcon, StarOutlinedIcon } from "../icons/MaterialIcons";
import { useState } from "react";

function ContactCard(props) {
  const {
    id,
    firstName,
    lastName,
    email,
    handleRerender,
    phoneNumber,
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
      setIsFavorite(!isFavorite);
    }

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
          <div onClick={toggleFavorite} className="star-container">
            {isFavorite ? <StarFilledIcon size="1.75rem"/> : <StarOutlinedIcon size="1.75rem" />} 
          </div>
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
