import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Grow something beautiful</p>
          <h1>Make room for <em>nature.</em></h1>
          <p className="hero-copy">Thoughtfully chosen houseplants to make your home feel fresher, calmer and more alive.</p>
          <Link to="/plants" className="button hero-button">Get Started <span aria-hidden="true">→</span></Link>
          <div className="hero-note"><span>✳</span> A greener home starts here</div>
        </div>
        <div className="hero-plant" role="img" aria-label="Lush green houseplants">
          <div className="hero-badge"><span>GROW</span><strong>at your<br />own pace</strong></div>
        </div>
      </section>
      <AboutUs />
      <section className="home-cta">
        <p className="eyebrow">Your next favourite plant is waiting</p>
        <h2>Find your kind of green.</h2>
        <Link to="/plants" className="button">Explore Plants</Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer"><span>❧ Paradise Nursery</span><span>Bring nature home.</span></footer>
    </div>
  );
}
