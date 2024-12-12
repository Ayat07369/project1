// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <section>
      <h2>Categories</h2>
      <p>Explore all our food categories!</p>

      <nav>
        <ul>
          <li><Link to="/burgers">Go to Burgers</Link></li>
          <li><Link to="/pizza">Go to Pizza</Link></li>
          <li><Link to="/pasta">Go to Pasta</Link></li>
          <li><Link to="/sandwiches">Go to Sandwiches</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Categories;
