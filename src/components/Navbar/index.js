import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Search } from "react-bootstrap-icons";
function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container
        fluid="lg"
        className="d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand
          href="#"
          className=" font__space_grotesk text-bold text-white text__custom logo__spacing mr-custom "
        >
          Sapphire
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white"/>
        <Navbar.Collapse
          id="navbarScroll"
        >
          <Nav
            className="my-2 w-100 my-md-0 d-md-flex align-items-md-center justify-content-md-between "
            // style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <Nav.Link className="nav-link" href="#action1">Explore</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Marketplace</Nav.Link>
            <Nav.Link className="nav-link" href="#">Artist</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Collection</Nav.Link>
            <Form className="d-none d-sm-flex  align-items-center justify-content-center">
              <InputGroup className=" rounded border">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  className="border-0 outline-0 bg-transparent "
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="bg-transparent border-0"
                >
                  <Search className="w-75 h-75 text-white" />
                </InputGroup.Text>
              </InputGroup>
              <button className="btn__custom ml-custom">Sign In</button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
