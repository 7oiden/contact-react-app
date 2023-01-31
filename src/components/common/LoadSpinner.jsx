import Spinner from "react-bootstrap/Spinner";

export default function LoadSpinner() {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
