// src/pages/Restaurants.js
import React from 'react';
import { Link } from 'react-router-dom';

function Restaurants() {
  return (
    <section>
      <h2>Restaurants</h2>
      <p>Explore our partner restaurants offering a wide range of cuisines.</p>

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

export default Restaurants;
