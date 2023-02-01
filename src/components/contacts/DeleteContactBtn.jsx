import { useState } from "react";
import axios from "axios";
import AlertMsg from "../common/AlertMsg";
import { BASE_URL } from "../../constants/api";
import Button from "react-bootstrap/Button";

function DeleteContactBtn({ id }) {
const [error, setError] = useState(null);

// const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts/" + id
const url = BASE_URL + "/" + id;

async function handleDelete() {
    const confirmDelete = window.confirm("Delete this post?");

    if (confirmDelete) {
      try {
        await axios.delete(url);
        console.log(url)
      } catch (error) {
        setError(error);
      }
    }
  }

  if (error) {
    return (
      <AlertMsg variant="danger" message="The item could not be deleted" />
    );
  }

 return (
    <Button onClick={handleDelete} variant="danger">Delete item</Button>
 )   
}

export default DeleteContactBtn;