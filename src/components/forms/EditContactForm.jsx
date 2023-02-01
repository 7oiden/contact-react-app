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
  
    // subject: yup
    //   .string()
    //   .required("Please enter a subject")
    //   .min(4, "Subject must be at least 4 characters")
    //   .max(20, "Subject can't be more than 20 characters"),
  
    // message: yup
    //   .string()
    //   .required("Please enter your message")
    //   .min(10, "Your message must be at least 10 characters")
    //   .max(400, "Message can't be more than 400 characters"),
  });

function EditContactForm(props) {
    const {id, firstName, lastName, email} = props;

    const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  

  console.log(id)

  const url = BASE_URL + "/" + id;

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

    const jsonData = {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      };

    try {
        const response = await axios.patch(url, jsonData);
        console.log("response", response.data);
        setSubmitted(true);
      } catch (error) {
        console.log("error", error);
        setServerError(error.toString());
      } finally {
        setSubmitting(false);
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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First name</Form.Label>
            <Form.Control 
            defaultValue={firstName}
            type="text"
            {...register("first_name")}
            />
            {errors.first_name && (
              <FormError>{errors.first_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control 
            defaultValue={lastName}
            type="text"
            {...register("last_name")}
            />
            {errors.last_name && (
              <FormError>{errors.last_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            defaultValue={email}
            type="email"
            {...register("email")}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </Form.Group>
          <Button className="form-button" type="submit">
            Update contact
          </Button>
            </fieldset>
        </Form>
    )
}

export default EditContactForm;