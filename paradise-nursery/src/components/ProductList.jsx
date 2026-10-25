import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice.jsx';

const products = [
  { id: 'pothos', name: 'Golden Pothos', price: 299, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80', description: 'Trailing green leaves for bright corners.' },
  { id: 'snake', name: 'Snake Plant', price: 399, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=700&q=80', description: 'A hardy favourite with upright leaves.' },
  { id: 'zz', name: 'ZZ Plant', price: 449, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1632207691143-643e2f7f4b3e?auto=format&fit=crop&w=700&q=80', description: 'Glossy foliage that is easy to maintain.' },
  { id: 'spider', name: 'Spider Plant', price: 249, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80', description: 'Playful arching leaves for shelves.' },
  { id: 'peace', name: 'Peace Lily', price: 499, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80', description: 'Elegant deep-green leaves and white blooms.' },
  { id: 'jade', name: 'Jade Plant', price: 279, category: 'Easy Care', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A compact succulent with rounded leaves.' },
  { id: 'monstera', name: 'Monstera Deliciosa', price: 799, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80', description: 'Iconic split leaves with tropical character.' },
  { id: 'rubber', name: 'Rubber Plant', price: 599, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'Bold, glossy leaves make a strong statement.' },
  { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 999, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Sculptural foliage for an empty corner.' },
  { id: 'areca', name: 'Areca Palm', price: 699, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80', description: 'Feathery palm fronds for a tropical feel.' },
  { id: 'bird', name: 'Bird of Paradise', price: 1299, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'Large leaves with a resort-like look.' },
  { id: 'dracaena', name: 'Dracaena Marginata', price: 649, category: 'Statement Plants', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80', description: 'Slim stems and spiky leaves add height.' },
  { id: 'succulent', name: 'Echeveria Succulent', price: 199, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A neat rosette that fits on a desk.' },
  { id: 'aloe', name: 'Aloe Vera', price: 229, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'A practical succulent with fleshy leaves.' },
  { id: 'peperomia', name: 'Peperomia', price: 349, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=80', description: 'Compact foliage with lots of personality.' },
  { id: 'fittonia', name: 'Fittonia', price: 189, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80', description: 'Small leaves with striking vein patterns.' },
  { id: 'pilea', name: 'Chinese Money Plant', price: 379, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Round leaves bring a cheerful touch.' },
  { id: 'fern', name: 'Boston Fern', price: 329, category: 'Small Space Plants', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'Soft, lush fronds for a hanging pot.' }
];

const categories = ['Easy Care', 'Statement Plants', 'Small Space Plants'];

export { products };

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Find your leafy companion</p>
        <h1>Shop houseplants</h1>
        <p>Bring home a little nature. Find the right plant for every corner.</p>
      </section>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((plant) => plant.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((plant) => plant.category === category).map((plant) => (
              <article className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} loading="lazy" />
                <div className="product-info">
                  <span className="product-category">{plant.category}</span>
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="product-buy-row">
                    <strong>₹{plant.price}</strong>
                    <button className="button button-small" disabled={isInCart(plant.id)} onClick={() => dispatch(addToCart(plant))}>
                      {isInCart(plant.id) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
