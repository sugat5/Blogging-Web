import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
    return (
        <Navbar bg="dark" variant="light">
        <Container>
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/createblog">
            Create Blog
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/signup">
            Signup
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/signin">
            Sign In
          </NavLink>  
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  