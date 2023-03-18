import React, { useState, useEffect } from "react";
import axios from "axios";
import './Products.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>brand</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Discount Percentage</th>
          <th>Rating</th>
          <th>Thumbnail</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.discountPercentage}</td>
            <td>{product.rating}</td>
            <td><img src={product.thumbnail} alt={product.title} /></td>
            <td>
              <ul>
                {product.images.map((productImage, index) => (
                  <li key={index}>
                    <img src={productImage} alt={product.title} />
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
