import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-shell cart-page">
      <section className="page-heading cart-heading">
        <p className="eyebrow">Your little indoor jungle</p>
        <h1>Shopping Cart</h1>
        <p>{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p>
      </section>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is waiting to grow</h2>
          <p>Explore our collection and find a plant to take home.</p>
          <Link className="button" to="/plants">Continue Shopping</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p className="muted">Unit price: ₹{item.price}</p>
                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button aria-label="Decrease quantity" disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="text-button delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove item</button>
                </div>
                <div className="cart-line-total">
                  <span className="muted">Item total</span>
                  <strong>₹{item.price * item.quantity}</strong>
                </div>
              </article>
            ))}
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </section>
          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><span>Plants ({itemCount} items)</span><span>₹{total}</span></div>
            <div className="summary-row"><span>Delivery</span><span className="free-label">Free</span></div>
            <div className="summary-total"><span>Total</span><strong>₹{total}</strong></div>
            <button className="button checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available shortly.')}>Checkout</button>
            <p className="checkout-note">Secure checkout coming soon.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
