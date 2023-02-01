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

function EditContactForm(props) {
    const {id, firstName, lastName, email} = props;

    const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  

  console.log(id)

  const url = BASE_URL + "/" + id;

    return (
        <>
        <Form>
            <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First name</Form.Label>
            <Form.Control defaultValue={firstName}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control defaultValue={lastName}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control defaultValue={email}/>
          </Form.Group>
          <Button className="form-button" type="submit">
            Update contact
          </Button>
            </fieldset>
        </Form>
        </>
    )
}

export default EditContactForm;