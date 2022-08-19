import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Logo from "../../Logo";



export default function Header() {
  return (
    <Row className='mt-4'>
      <Navbar bg="none" expand="lg" >
      <Container>
      <Navbar.Brand href="#">
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
          <Nav.Link className='px-5' href="/laptops">Laptops & Tables</Nav.Link>
          <Nav.Link className='px-5' href="/smart-lighting">Smart Lighting</Nav.Link>
          <Nav.Link className='px-5' href="/smart-watch">Smart Watch</Nav.Link>
          <Nav.Link className='px-5' href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Form className="d-flex searchBox border-bottom" >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ border:'none', backgroundColor: 'transparent'}}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Row>
  )
}