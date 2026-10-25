
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import {
  configureStore
} from '@reduxjs/toolkit'

import cartReducer from './redux/CartSlice'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'
import './App.css'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

function Home() {
  const [showProductList, setShowProductList] = useState(false)

  if (showProductList) {
    return <ProductList />
  }

  return (
    <div className="background-image">
      <div
        className="app-container"
        onClick={() => setShowProductList(true)}
      >
        <nav className="navbar">
          <h2>Paradise Nursery</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
          </div>
        </nav>

        <section className="hero-content" id="home">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Bring nature home with our beautiful collection
            of indoor and outdoor plants.
          </p>

          <button
            className="get-started"
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </section>

        <section id="about">
          <AboutUs />
        </section>
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
