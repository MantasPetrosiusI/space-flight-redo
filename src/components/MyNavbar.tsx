import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => (
  <Navbar bg="dark" expand="lg">
    <Link to={"/"}>
      <Navbar.Brand>Space-Flight News</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default MyNavbar;
