import React from "react";
import { Nav, Button, Form, NavDropdown, Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const path = useLocation();
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-5" href="/">
            Shopping Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link className={path.pathname === "/" ? "nav-link active ms-3" : "ms-3 nav-link"} to="/">
                Home
              </Link>

              <Link className={path.pathname === "/products" ? "nav-link active ms-3" : "ms-3 nav-link"} to="/products">
                Product
              </Link>
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button> */}
              <Nav>
                <Link className={path.pathname === "/cart" ? "nav-link active ms-3" : "ms-3 nav-link"} to="/cart">
                  Cart({state?.length})
                </Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
