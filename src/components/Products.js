import { useState } from "react";
import useCart from "../hooks/useCart.js";

// TODO: get these from the backend
const dummyProducts = [
  {
    id: 1,
    name: "Shampoo",
    price: 1.2,
  },
  {
    id: 2,
    name: "Conditioner",
    price: 1.6,
  },
];

export default function Products() {
  const [products, setProducts] = useState(dummyProducts);
  const { addItem } = useCart();

  return (
    <div className="products">
      <h1>Products</h1>
      {products.map(product => {
        return <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addItem(product)}>Add To Cart</button>
        </div>
      })}
    </div>
  )
}