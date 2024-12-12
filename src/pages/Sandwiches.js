// src/pages/Sandwiches.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sandwiches() {
  return (
    <section>
      <h2>Sandwiches</h2>
      <p>Freshly made sandwiches with a range of tasty fillings to satisfy your hunger.</p>
      <button>Order Now</button>

      <nav>
        <ul>
          <li><Link to="/burgers">Go to Burgers</Link></li>
          <li><Link to="/pizza">Go to Pizza</Link></li>
          <li><Link to="/pasta">Go to Pasta</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Sandwiches;
