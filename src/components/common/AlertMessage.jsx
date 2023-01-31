import Alert from "react-bootstrap/Alert";

export default function AlertMsg({ variant, message, show }) {
  return (
    <Alert show={show} variant={variant}>
      {message}
    </Alert>
  );
}

AlertMsg.defaultProps = {
  variant: "warning",
  content: "Something is not working correctly",
};
