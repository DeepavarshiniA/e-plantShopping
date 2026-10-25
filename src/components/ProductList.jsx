
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/CartSlice'

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 299,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 349,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 249,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400'
  },
  {
    id: 4,
    name: 'Areca Palm',
    price: 399,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 5,
    name: 'Aloe Vera',
    price: 199,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 6,
    name: 'Rubber Plant',
    price: 449,
    category: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 7,
    name: 'Jade Plant',
    price: 199,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 8,
    name: 'Echeveria',
    price: 249,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 9,
    name: 'Haworthia',
    price: 299,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 10,
    name: 'String of Pearls',
    price: 349,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 11,
    name: 'Burro Tail',
    price: 279,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 12,
    name: 'Zebra Plant',
    price: 329,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 13,
    name: 'Monstera',
    price: 599,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 14,
    name: 'Fiddle Leaf Fig',
    price: 699,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 15,
    name: 'Calathea',
    price: 449,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 16,
    name: 'Philodendron',
    price: 399,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 17,
    name: 'Dracaena',
    price: 499,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 18,
    name: 'Boston Fern',
    price: 349,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400'
  }
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const categories = [
    'Air Purifying',
    'Succulents',
    'Decorative Plants'
  ]

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <div className="shop-page">
      <nav className="shop-navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h1>Our Beautiful Plants</h1>

      {categories.map(category => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const added = cartItems.some(
                  item => item.id === plant.id
                )

                return (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
