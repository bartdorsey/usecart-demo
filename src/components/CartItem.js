import useCart from '../hooks/useCart.js';
import styles from './CartItem.module.css';

export default function CartItem({
  id, name, price
}) {
  const { removeItem } = useCart();

  return (
    <div className={styles.cartItem}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => removeItem(id) } className={styles.removeButton}>
        Remove
      </button>
    </div>
  )
}