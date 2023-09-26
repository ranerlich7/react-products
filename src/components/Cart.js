import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  function getCart() {
    console.log("!!! get cart !!!");
    axios
      .get("http://localhost:8000/cartitems")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.cart_items);
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(getCart, []); // get cart when loading this page

  return (
    <>
      <h2>Cart</h2>
      {cart.cart_items &&
        cart.cart_items.map((item, index) => <li key={index}>{item}</li>)}
    </>
  );
}

export default Cart;
