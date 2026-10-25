
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  updateQuantity,
  removeItem
} from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const handleIncrement = item => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }))
  }

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }))
    }
  }

  const handleDelete = item => {
    dispatch(removeItem(item.name))
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  )

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <div className="cart-container">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </div>
      </nav>

      <h1 className="page-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Add some plants to your cart to get started.</p>
          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.cost.toFixed(2)}</p>
                <p>
                  Item Total: ${(item.cost * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  onClick={() => handleDecrement(item)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => handleIncrement(item)}>
                  +
                </button>
              </div>

              <button
                className="delete-button"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>

            <button
              className="checkout-button"
              onClick={() => alert('Coming Soon')}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartItem
