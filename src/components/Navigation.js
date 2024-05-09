import React from 'react';
import { Navbar, Container, InputGroup, Form, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Correct import
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo1.png';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbg">
      <Container fluid style={{color:'white'}} >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="200"
            height="50"
            alt="Logo"
            style={{marginLeft:'-48px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Kurta</Nav.Link>
            <Nav.Link href="#link">Saree</Nav.Link>
            <Nav.Link href="#link">Kurta Set</Nav.Link>
            <Nav.Link href="#link">Wedding</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        <Form className="d-flex ms-auto" > {/* Align to the right */}
          <InputGroup>
            <InputGroup.Text style={{marginLeft:'0rem'}}>
              <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </InputGroup>
        </Form>
         </Container>
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         <Nav.Link href="#home"><FontAwesomeIcon icon={faUser} style={{ color: 'black', fontSize: '24px' }} /></Nav.Link>
         <Nav.Link href="#home">    <FontAwesomeIcon icon={faHeart} style={{ color: '#000000', fontSize: '24px' }} /></Nav.Link>
         <Nav.Link href="#home">  <FontAwesomeIcon icon={faCartShopping} style={{ color: '#000000', fontSize: '24px'}} /></Nav.Link>
         </Nav>
         </Navbar.Collapse>
     
    </Navbar>
  );
}

export default Navigation;
