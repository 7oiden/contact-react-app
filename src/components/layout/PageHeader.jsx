import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function PageHeader() {
  return (
    <header>
        <Nav className="container header-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>Contacts</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>About</NavLink>
        </Nav>
    </header>
  );
}

export default PageHeader;