// src/pages/OurDeal.js
import React from 'react';
import { Link } from 'react-router-dom';

function OurDeal() {
  return (
    <section>
      <h2>Our Deal</h2>
      <p>Check out our amazing offers!</p>

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

export default OurDeal;
