import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AlertMsg from "../common/AlertMsg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import FormError from "./FormError";
import { BASE_URL } from "../../constants/api";
import _ from "lodash";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your first name must be at least 3 characters")
    .max(10, "First name can't be more than 10 characters"),

  last_name: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Your last name must be at least 4 characters")
    .max(12, "Last name can't be more than 12 characters"),

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),

  phone_number: yup.string().required("Please enter a phone number"),
});

function AddContactForm({ handleAddContact, handleRerender }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  //   const url = "https://my-json-server.typicode.com/7oiden/my-json-server/contacts";
  const url = BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    reset();

    const firstName = _.capitalize(data.first_name);
    const lastName = _.capitalize(data.last_name);

    const jsonData = {
      data: {
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone_number: data.phone_number,
      },
    };

    console.log(jsonData);

    try {
      const response = await axios.post(url, jsonData);
      console.log("response", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        handleAddContact();
      }, 2000);
      handleRerender();
    }
  }

  if (submitted)
    return (
      <>
        <AlertMsg
          variant="success"
          message="Your new contact has successfully been updated"
        />
        {/* <Link to="/" className="text-link">
        Take me back to the homepage
      </Link> */}
      </>
    );

  return (
    <div className="contact__container" id="contact-section">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              {...register("first_name")}
            />
            {errors.first_name && (
              <FormError>{errors.first_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              {...register("last_name")}
            />
            {errors.last_name && (
              <FormError>{errors.last_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <FormError>{errors.phone_number.message}</FormError>
            )}
          </Form.Group>
          {submitted && (
            <AlertMsg
              variant="success"
              message="Your message was successfully submitted. We will get back to you shortly."
              show={show}
            />
          )}
          {serverError && <AlertMsg variant="danger" message={serverError} />}
          <Button className="form-button" type="submit">
            Save contact
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default AddContactForm;
