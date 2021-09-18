import React, { useEffect } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "../../Screens/DesignPackView/DesignPackView.css";

const Header = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar
      className="invisibleOnPrint"
      bg="primary"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/publicassets/layout/eps-logo.svg"
              height="30"
              alt=""
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex"></Form>
          </Nav>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/mydesignpacks">My Design Packs</Link>
            </Nav.Link>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
