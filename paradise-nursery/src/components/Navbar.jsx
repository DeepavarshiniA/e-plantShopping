import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-icon">❧</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}
