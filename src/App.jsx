
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

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
  return (
    <div className="home-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
      </nav>

      <div className="hero-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Bring nature home with our beautiful collection
          of indoor and outdoor plants.
        </p>

        <a href="/plants" className="get-started">
          Get Started
        </a>
      </div>

      <AboutUs />
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
