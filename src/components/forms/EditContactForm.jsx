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
    const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const id = props.id

  console.log(props.id)

  const url = BASE_URL + "/" + id;

    return (
        <Form>
            <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First name</Form.Label>
            <Form.Control />
          </Form.Group>
            </fieldset>
        </Form>
    )
}

export default EditContactForm;