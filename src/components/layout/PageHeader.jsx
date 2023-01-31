import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function PageHeader() {
  return (
    <header>
    <Nav className="justify-content-center">
      <Nav.Item>
        <NavLink to="/">Contacts</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/about">About</NavLink>
      </Nav.Item>
    </Nav>
    </header>
  );
}

export default PageHeader;