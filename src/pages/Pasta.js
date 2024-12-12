// src/pages/Pasta.js
import React from 'react';
import { Link } from 'react-router-dom';

function Pasta() {
  return (
    <section>
      <h2>Pasta</h2>
      <p>Enjoy a variety of pasta dishes cooked to perfection with the finest sauces.</p>
      <button>Order Now</button>

      <nav>
        <ul>
          <li><Link to="/burgers">Go to Burgers</Link></li>
          <li><Link to="/pizza">Go to Pizza</Link></li>
          <li><Link to="/sandwiches">Go to Sandwiches</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Pasta;
