// src/pages/Burgers.js
import React from 'react';
import { Link } from 'react-router-dom';  // Импортируем компонент Link

function Burgers() {
  return (
    <section>
      <h2>Burgers</h2>
      <p>Try our delicious burgers with fresh ingredients and juicy patties!</p>
      <button>Order Now</button>

      {/* Ссылки для перехода на другие страницы */}
      <nav>
        <ul>
          <li><Link to="/pasta">Go to Pasta</Link></li>
          <li><Link to="/sandwiches">Go to Sandwiches</Link></li>
          <li><Link to="/pizza">Go to Pizza</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Burgers;
