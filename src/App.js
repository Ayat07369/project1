// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Burgers from './pages/Burgers';
import Pizza from './pages/Pizza';
import Pasta from './pages/Pasta';
import Sandwiches from './pages/Sandwiches';
import OurDeal from './pages/OurDeal';
import Restaurants from './pages/Restaurants';
import Categories from './pages/Categories';
import ViewMenu from './pages/ViewMenu';
import BookTable from './pages/BookTable';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/burgers">Burgers</Link></li>
            <li><Link to="/pizza">Pizza</Link></li>
            <li><Link to="/pasta">Pasta</Link></li>
            <li><Link to="/sandwiches">Sandwiches</Link></li>
            <li><Link to="/our-deal">Our Deal</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/view-menu">View Menu</Link></li>
            <li><Link to="/book-table">Book a Table</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/our-deal" element={<OurDeal />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/view-menu" element={<ViewMenu />} />
          <Route path="/book-table" element={<BookTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
