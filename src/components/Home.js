import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

function Home() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Home</Navbar.Brand>
    </Navbar>
  );
}

export default Home;
