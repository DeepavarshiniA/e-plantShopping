
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <nav className="shop-navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Add some beautiful plants to get started.</p>
          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Item Total: ₹{item.price * item.quantity}
                </p>

                <div className="quantity-buttons">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total Amount: ₹{totalAmount}</h2>

            <button
              className="checkout-button"
              onClick={() => alert('Checkout Coming Soon!')}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartItem
