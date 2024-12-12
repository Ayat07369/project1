// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to Foodie!</h1>
      <p>Select a category from the menu above.</p>

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

export default Home;
