import { useState, useEffect } from "react";
import axios from "axios";
import LoadSpinner from "../common/LoadSpinner";
import AlertMsg from "../common/AlertMsg";
import ContactCard from "./ContactCard";
import { BASE_URL } from "../../constants/api";
import SearchContactForm from "../forms/SearchContactForm";

function ContactsList() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

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

    // console.log(contact)

    return (
        <>
        <h2>Contact list:</h2>
        <SearchContactForm setQuery={setQuery} loading={loading}/>
        <div className="card-container">
            {contact.filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.attributes.last_name.toLowerCase().includes(query.toLowerCase()) ||
                item.attributes.last_name.toLowerCase().startsWith(query.toLowerCase())
              ) {
                return item;
              }
            }).map((item) => (
            <ContactCard 
                key={item.id}
                id={item.id}
                firstName={item.attributes.first_name}
                lastName={item.attributes.last_name}
                email={item.attributes.email}
                />
        ))}
        </div>
        </>
    )
}

export default ContactsList;