// src/pages/Pizza.js
import React from 'react';
import { Link } from 'react-router-dom';

function Pizza() {
  return (
    <section>
      <h2>Pizza Menu</h2>
      <p>Enjoy our delicious pizza selection!</p>
      <button>Order Now</button>

      <nav>
        <ul>
          <li><Link to="/burgers">Go to Burgers</Link></li>
          <li><Link to="/pasta">Go to Pasta</Link></li>
          <li><Link to="/sandwiches">Go to Sandwiches</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Pizza;
