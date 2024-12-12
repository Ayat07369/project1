// src/pages/BookTable.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookTable() {
  return (
    <section>
      <h2>Book a Table</h2>
      <p>Reserve a table at our restaurant.</p>

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

export default BookTable;
