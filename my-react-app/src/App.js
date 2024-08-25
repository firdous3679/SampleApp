import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './Pages/Home'; // Import the Home component
import Contact from './Pages/Contact'; // Import the Contact component
import Cart from './Pages/Cart'; // Import the Contact component
import Header from './components/header'; // Import the Header component
import Footer from './components/footer'; // Import the Footer component
import { CartProvider } from './CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header /> {/* Display the Header component on all pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer /> {/* Display the Footer component on all pages */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

