import { useState, useEffect } from "react";
import axios from "axios";
import LoadSpinner from "../common/LoadSpinner";
import AlertMsg from "../common/AlertMsg";
import ContactCard from "./ContactCard";
import AddContactModal from "../modals/AddContactModal";

function ContactsList() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts";

    useEffect(function () {
        async function getContact() {
        try {
            const response = await axios.get(url);
            setContact(response.data);
            // console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        }
        getContact()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <LoadSpinner />;

    

    if (error) {
      return (
        <AlertMsg
          variant="danger"
          message="An error occurred when trying to fetch the API"
        />
      );
    }

    console.log(contact)

    return (
        <>
        <div className="card-container">
            {contact.map((item) => (
            <ContactCard 
                key={item.id}
                id={item.id}
                name={item.name}
                body={item.body}
                />
        ))}
        </div>
        <AddContactModal />
        </>
    )
}

export default ContactsList;