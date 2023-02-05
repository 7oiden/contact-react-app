import { useState, useEffect } from "react";
import _, { orderBy, filter, map, mapKeys } from "lodash";
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

  useEffect(
    () => {
      async function getContact() {
        try {
          const response = await axios.get(url);
          setContact(response.data.data);

          console.log(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getContact();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rerender]
  );

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
  };

  console.log(contact);

  const orderedContacts = orderBy(contact, ["attributes.last_name"], ["asc"]);

  const filteredContacts = _.filter(orderedContacts, function (o) {
    return (
      o.attributes.first_name.toLowerCase().includes(query.toLowerCase()) ||
      o.attributes.first_name.toLowerCase().startsWith(query.toLowerCase()) ||
      o.attributes.last_name.toLowerCase().startsWith(query.toLowerCase()) ||
      o.attributes.last_name.toLowerCase().startsWith(query.toLowerCase())
    );
  });

  return (
    <>
      <h2>Contact list:</h2>
      <AddContactModal handleRerender={handleRerender} />
      <SearchContactForm setQuery={setQuery} loading={loading} />
      <div className="card-container">
        {filteredContacts.map(
          ({
            id,
            attributes: {
              first_name,
              last_name,
              email,
              phone_number,
              favorite,
            },
          }) => (
            <ContactCard
              key={id}
              id={id}
              firstName={first_name}
              lastName={last_name}
              email={email}
              phoneNumber={phone_number}
              favorite={favorite}
              handleRerender={handleRerender}
              filteredContacts={filteredContacts}
            />
          )
        )}
      </div>
    </>
  );
}

export default ContactsList;
