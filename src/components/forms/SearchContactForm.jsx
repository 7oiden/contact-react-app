import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchContactForm ({setQuery, loading}) {
    return (
    <>
      <Form.Control 
      onKeyUp={(event) => setQuery(event.target.value)}
      disabled={loading}
      placeholder={loading ? "Please wait" : "Start typing..."}
      size="lg" type="text" />
    </>
    )
}

export default SearchContactForm;