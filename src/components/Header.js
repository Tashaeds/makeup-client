import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Make-Up</Navbar.Brand>
      <Link to="/">Products</Link>
      <Link to="/about">About</Link>
    </Navbar>
  );
}

export default Header;
