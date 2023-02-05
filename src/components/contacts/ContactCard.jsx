import Card from "react-bootstrap/Card";
import DeleteContactBtn from "./DeleteContactBtn";
import EditContactModal from "../modals/EditContactModal";
import NotesModal from "../modals/NotesModal";
import { StarFilledIcon, StarOutlinedIcon } from "../icons/MaterialIcons";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

function ContactCard(props) {
  const {
    id,
    firstName,
    lastName,
    email,
    handleRerender,
    phoneNumber,
    favorite,
    filteredContacts,
  } = props;

  const [contact, setContact] = useState(filteredContacts);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [rerender, setRerender] = useState(0);

  console.log(isFavorite);

  const url = BASE_URL + id;

  useEffect(() => {
    async function updateContact() {
      const jsonData = {
        data: {
          ...contact,
          favorite: isFavorite,
        },
      };

      try {
        const response = await axios.put(url, jsonData);
        console.log("response", response.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    updateContact();
  }, [rerender]);

  function toggleFavorite() {
    // const updatedContact = { ...contact, favorite: !contact.favorite };
    // setContact(updatedContact);
    setIsFavorite(!isFavorite);
    const handleRerender = () => {
      setRerender(rerender + 1);
    };
    handleRerender();
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
            {isFavorite ? (
              <StarFilledIcon size="1.75rem" />
            ) : (
              <StarOutlinedIcon size="1.75rem" />
            )}
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
