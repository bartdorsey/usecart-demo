import React from 'react';
import Cart from './components/Cart.js';
import Products from './components/Products.js';
import NavBar from './components/NavBar.js';
import useFetchCart from './hooks/useFetchCart.js';

function App() {
  useFetchCart();

  return (
    <main>
      <NavBar/>
      <Products/>
      <Cart />
    </main>
  )
}

export default App;
