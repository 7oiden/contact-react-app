import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function PageHeader() {
  return (
    <header>
      <div className="container header-container">
        <NavLink to="/">Contacts</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
    </header>
  );
}

export default PageHeader;