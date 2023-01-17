import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Make-Up</Navbar.Brand>
      {isAuthenticated && <link to="/">Home</link>}
      {isAuthenticated && <link to="/productByBrand">Products</link>}
      {isAuthenticated && <link to="/profile">Profile</link>}
      {isAuthenticated && <link to="/about">About</link>}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Navbar>
  );
}

export default Header;
