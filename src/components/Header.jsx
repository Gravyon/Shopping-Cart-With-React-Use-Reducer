import React from "react";
import {
  Badge,
  Container,
  FormControl,
  Navbar,
  Dropdown,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              placeholder="Search product"
              style={{ width: 500 }}
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignright="true">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>10</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ maxWidth: 370 }}>
                <span style={{ padding: 10 }}> Cart is empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
