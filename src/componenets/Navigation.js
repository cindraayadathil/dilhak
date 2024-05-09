import React from 'react';
import { Navbar, Container, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Correct import
import logo from '../images/logo1.png';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbg">
      <Container fluid style={{color:'white'}} >
        <Navbar.Brand style={{color:'white'}} href="#home">
          <img
            src={logo}
            width="200"
            height="50"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Kurta</Navbar.Brand>
        <Navbar.Brand href="#home">Sarees</Navbar.Brand>
        <Navbar.Brand href="#home">kurta Set</Navbar.Brand>
        <Navbar.Brand href="#home">Wedding</Navbar.Brand>
        <Form className="d-flex ms-auto"> {/* Align to the right */}
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </InputGroup>
          
          {/* Correct user icon with valid Font Awesome import */}
          <FontAwesomeIcon icon={faUser} style={{ color: 'black', marginLeft: '5px',width:'120px',height:'20px' }} /> 
          
          
          
          
          <div>Profile</div>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navigation;
