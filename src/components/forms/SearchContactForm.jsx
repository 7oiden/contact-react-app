import Form from 'react-bootstrap/Form';
import { SearchIcon } from '../icons/MaterialIcons';

function SearchContactForm ({setQuery, loading}) {
    return (
    <div className='search-input-wrapper'>
      <Form.Control 
      onKeyUp={(event) => setQuery(event.target.value)}
      disabled={loading}
      placeholder={loading ? "Please wait" : "Start typing..."}
      size="lg" type="text" />
      <SearchIcon color="#000000" size="2rem" className="search-icon" />
    </div>
    )
}

export default SearchContactForm;