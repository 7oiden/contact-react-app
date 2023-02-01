import { useState } from "react";
import axios from "axios";
import AlertMsg from "../common/AlertMsg";
import { BASE_URL } from "../../constants/api";
import Button from "react-bootstrap/Button";
import { DeleteIcon } from "../icons/MaterialIcons";

function DeleteContactBtn({ id, rerender, handleRerender }) {
const [error, setError] = useState(null);

// const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts/" + id
const url = BASE_URL + "/" + id;

async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");

    if (confirmDelete) {
      try {
        await axios.delete(url);
        console.log(url)
      } catch (error) {
        setError(error);
      } finally {
        handleRerender();
      }
    }
  }

  if (error) {
    return (
      <AlertMsg variant="danger" message="The contact could not be deleted, please try again later" />
    );
  }

 return (
    <button onClick={handleDelete} className="btn-icon-box"><DeleteIcon color="#000000" size="2rem" /></button>
 )   
}

export default DeleteContactBtn;