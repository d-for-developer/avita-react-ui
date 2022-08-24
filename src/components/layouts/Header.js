import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Logo from "../../Logo";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';


export default function Header() {

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  return (
    <Row className='mt-4'>
      <Navbar bg="none" expand="lg" >
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='px-5' href="/">Home</Nav.Link>
              <Nav.Link className='px-5' href="/">Laptops</Nav.Link>
              <Nav.Link className='px-5' href="/">Tablets</Nav.Link>
              {/* <Nav.Link className='px-5' href="/">Smart Lighting</Nav.Link> */}
              {/* <Nav.Link className='px-5' href="/smart-watch">Smart Watch</Nav.Link> */}
              <NavDropdown className='px-5' title="Smart Wearables" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavDropdown.Item className='nav-dropdown px-5' href="/">WRISTIO 1 [Launching Soon]</NavDropdown.Item>
                <NavDropdown.Item className='nav-dropdown px-5' href="/">WRISTIO 2 [Launching Soon]</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className='px-5' href="/contact">Contact</Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex searchBox border-bottom" >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ border: 'none', backgroundColor: 'transparent' }}
              />
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}