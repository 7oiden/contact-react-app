import { useState, useEffect } from "react";
import axios from "axios";
import LoadSpinner from "../common/LoadSpinner";
import AlertMsg from "../common/AlertMsg";
import ContactCard from "./ContactCard";
import AddContactModal from "../modals/AddContactModal";
import { BASE_URL } from "../../constants/api";

function ContactsList() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts";
    const url = BASE_URL;

    useEffect(function () {
        async function getContact() {
        try {
            const response = await axios.get(url);
            setContact(response.data.data);
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
                firstName={item.attributes.first_name}
                lastName={item.attributes.last_name}
                email={item.attributes.email}
                />
        ))}
        </div>
        <AddContactModal />
        </>
    )
}

export default ContactsList;