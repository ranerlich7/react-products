import axios from "axios";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get("https://django-rest-product.onrender.com/product")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  return (
    <>
      {products.length > 0 ? products[0].name : "no products yet"}
      <br />
      <button onClick={getProducts}>Get Products</button>
    </>
  );
}

export default App;
