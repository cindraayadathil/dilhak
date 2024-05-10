import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';
import b5 from '../images/b5.jpg';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpeg';
import b3 from '../images/b3.webp';
import b4 from '../images/ban.webp';
import './Bestseller.css';

function Bestseller() {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Bestseller');

  // Data for each section
  const sections = {
    Bestseller: [
      { title: 'Bestseller 1', text: 'Content for bestseller 1',imageUrl: b1 },
      { title: 'Bestseller 2', text: 'Content for bestseller 2',imageUrl: b1},
      { title: 'Bestseller 3', text: 'Content for bestseller 3',imageUrl: b1 },
      { title: 'Bestseller 4', text: 'Content for bestseller 4', imageUrl: b1},
    ],
    Trending: [
      { title: 'Trending 1', text: 'Content for trending 1',imageUrl: b4 },
      { title: 'Trending 2', text: 'Content for trending 2',imageUrl: b4 },
      { title: 'Trending 3', text: 'Content for trending 3',imageUrl: b4 },
      { title: 'Trending 4', text: 'Content for trending 4',imageUrl: b4 },
    ],
    Latest: [
      { title: 'Latest 1', text: 'Content for latest 1',imageUrl: b5 },
      { title: 'Latest 2', text: 'Content for latest 2',imageUrl: b5 },
      { title: 'Latest 3', text: 'Content for latest 3',imageUrl: b5 },
      { title: 'Latest 4', text: 'Content for latest 4',imageUrl: b5 },
    ],
  };

  return (
    <div>
      <Nav className="justify-content-center" activeKey={activeSection}>
        <Nav.Item  className="nav-item-spacing"> 
          <h1 className='active' eventKey="Bestseller" onClick={() => setActiveSection('Bestseller')}>
            Bestseller
          </h1>
        </Nav.Item>
        <Nav.Item  className="nav-item-spacing">
          <h1 className='active' eventKey="Trending" onClick={() => setActiveSection('Trending')}>
            Trending
          </h1>
        </Nav.Item>
        <Nav.Item  className="nav-item-spacing">
          <h1 className='active' eventKey="Latest" onClick={() => setActiveSection('Latest')}>
            Latest
          </h1>
        </Nav.Item>
      </Nav>

      <Container fluid="md">
        <Row>
          {sections[activeSection].map((card, index) => (
            <Col sm={3} key={index}>
              <Card  data-aos="fade-up"  data-aos-delay={index * 200}  style={{ Width: '20rem' }}>
                <Card.Img variant="top" src={card.imageUrl}style={{ Width: '20rem' }} />
                <Card.Body className='cardbody'>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="outline">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Bestseller;
