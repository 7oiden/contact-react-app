import { useState } from "react";
import axios from "axios";
import AlertMsg from "../common/AlertMsg";

function DeleteContactBtn({ id }) {
const [error, setError] = useState(null);

// const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts/" + id
const url = "https://obscure-reaches-62581.herokuapp.com/api/contacts/" + id;

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
    <button onClick={handleDelete}>Delete item</button>
 )   
}

export default DeleteContactBtn;