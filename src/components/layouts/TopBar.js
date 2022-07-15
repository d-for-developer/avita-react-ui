import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';


export default function TopBar() {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link className='px-3' href="#home">AVITA INDIA</Nav.Link>
              <Nav.Link className='px-3' href="#store">GET AVITA STORE APP</Nav.Link>
              <Nav.Link className='px-3' href="#help">ONLINE HELP</Nav.Link>
              <NavDropdown className='px-3' title="RETAIL STORE" id="basic-nav-dropdown">
                <NavDropdown.Item className='nav-dropdown' href="#action/3.1">AVITA HOME</NavDropdown.Item>
                <NavDropdown.Item className='nav-dropdown' href="#action/3.2">AVITA STORE</NavDropdown.Item>
                <NavDropdown.Item className='nav-dropdown' href="#action/3.3">AUTHORIZED PARTNER</NavDropdown.Item>
              </NavDropdown>
            </Nav>
      
            <Nav>
              <Nav.Link className='px-2' href="#login">SIGN IN</Nav.Link>
              <Nav.Link className='px-3' href="#register">SIGN UP</Nav.Link>
              <FaShoppingCart style={{ color: '#fff', fontSize: '16px', alignItems: 'center', marginTop: '10px' }} />
              <Nav.Link className='px-2' href="#cart">CART</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}
