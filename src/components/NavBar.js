import useCart from "../hooks/useCart.js";

export default function NavBar() {
  const { cartItems } = useCart();

  return (
    <nav>
      <span>Home</span>
      <span>Products</span>
      <span>Cart ({ cartItems.length })</span>
    </nav>
  ) 
}
