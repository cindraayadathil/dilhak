import React from 'react';
// import { useParams } from 'react-router-dom';

function BestsellerProductList() {
//   const { productId } = useParams(); // Get productId from route
  // In a real-world scenario, you would fetch product details using productId
  const product = [
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },
  { name: 'Sample Product', description: 'Sample description', price: '$25' },]

 

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default BestsellerProductList;
