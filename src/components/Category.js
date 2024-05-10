import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './Category.css';
import N2 from '../images/N2.jpg';
import N1 from '../images/N1.webp';
import N3 from '../images/N3.avif';
import N4 from '../images/N4.JPG';
import N5 from '../images/N5.jpg';
import N6 from '../images/N6.jpg';
import N7 from '../images/N7.webp';
import N8 from '../images/N8.jpg';
import N9 from '../images/N9.webp';
import N0 from '../images/N0.jpg';
import N11 from '../images/N11.jpg';
import N12 from '../images/N12.webp';

const initialCardData = [
  {
    title: 'Churidar Set',
    sale: '50-80% OFF',
    image: N2,
    link: 'Shop Now',
  },
  {
    title: 'Casual Wear',
    sale: '40-80% OFF',
    image: N1,
    link: 'Shop Now',
  },
  {
    title: 'Casual Wear',
    sale: '50-75% OFF',
    image: N3, 
    link: 'Shop Now',
  },
  {
    title: 'Kurtha Set',
    sale: '30-70% OFF',
    image: N4, 
    link: 'Shop Now',
  },
  {
    title: 'Cotton Kurtha Set',
    sale: '30-70% OFF',
    image: N5, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Party Wear Churidar Set',
    sale: '30-80% OFF',
    image: N6, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Silk Saree',
    sale: '40-80% OFF',
    image: N7, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Kurtha',
    sale: '30-60% OFF',
    image: N8, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Churidar Material',
    sale: 'UP TO 70% OFF',
    image: N9, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Cotton Saree',
    sale: 'UP TO 80% OFF',
    image: N0, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'Party Wear Saree',
    sale: 'UP TO 60% OFF',
    image: N11, // Replace with actual image
    link: 'Shop Now',
  },
  {
    title: 'plain Saree',
    sale: 'UP TO 60% OFF',
    image: N12, // Replace with actual image
    link: 'Shop Now',
  },
 
];

const Category = () => {
  const [cards] = useState(initialCardData);

  return (
    <div>
     <h1 className='catbg' style={{paddingTop:'50px'}}>SHOP BY CATEGORY</h1>

      {/* Product Card Grid */}
      <Container className="py-5" >
        <Row xs={1} md={2} lg={3} xl={4} >
          {cards.map((card, index) => (
            <Col key={index} className="mb-4">
              <Card >
                <Card.Img variant="top" src={card.image} style={{height:'300px'}}/>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  {card.sale && <Card.Subtitle className="mb-2 text-muted small">{card.sale}</Card.Subtitle>}
                  <Button variant="" href="#">{card.link}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
     
     
    </div>
  );
};

export default Category;
