// src/pages/ViewMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

function ViewMenu() {
  return (
    <section>
      <h2>View Menu</h2>
      <p>See our full menu here!</p>

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

export default ViewMenu;
