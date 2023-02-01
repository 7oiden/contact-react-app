import { useState, useEffect } from "react";
import { orderBy } from "lodash";
import axios from "axios";
import LoadSpinner from "../common/LoadSpinner";
import AlertMsg from "../common/AlertMsg";
import ContactCard from "./ContactCard";
import { BASE_URL } from "../../constants/api";
import SearchContactForm from "../forms/SearchContactForm";
import AddContactModal from "../modals/AddContactModal";

function ContactsList() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");
    const [rerender, setRerender] = useState(0);

    const url = BASE_URL;

    useEffect(() => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    [rerender]);

    if (loading) return <LoadSpinner />;

    if (error) {
      return (
        <AlertMsg
          variant="danger"
          message="An error occurred when trying to fetch the API"
        />
      );
    }

    const handleRerender = () => {
      setRerender(rerender + 1);
    }

    console.log(contact)

    const orderedContacts = orderBy(contact, ["attributes.last_name"], ["asc"])

    return (
        <>
        <h2>Contact list:</h2>
        <AddContactModal 
        handleRerender={handleRerender}
        />
        <SearchContactForm setQuery={setQuery} loading={loading}/>
        <div className="card-container">
            {orderedContacts.filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.attributes.first_name.toLowerCase().includes(query.toLowerCase()) ||
                item.attributes.first_name.toLowerCase().startsWith(query.toLowerCase()) ||
                item.attributes.last_name.toLowerCase().startsWith(query.toLowerCase()) ||
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
                handleRerender={handleRerender}
                />
        ))}
        </div>
        </>
    )
}

export default ContactsList;