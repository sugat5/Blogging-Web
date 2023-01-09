import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png"

function NavBar() {
    return (
        <Navbar className="Nav" >
          <img src={logo} id="img"></img>
        <Container className="Nav-container" >
          <NavLink className="NavLink" style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" style={{ textDecoration: "none" }} to="/createblog">
            Create Blog
          </NavLink>
          <NavLink className="NavLink"  style={{ textDecoration: "none" }} to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="NavLink" style={{ textDecoration: "none" }} to="/signin">
            Sign In
          </NavLink>  
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  