import React from 'react';
import CartItem from "./CartItem.js"
import styles from "./Cart.module.css"
import useCart from '../hooks/useCart.js';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      {cartItems.map(({ id, name, price }) => (
        <CartItem name={name} price={price} id={id} key={id} />
      ))}
    </div>
  )
}
