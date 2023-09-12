import axios from "axios";
import { useState } from "react";
import Product from "./components/Product";

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
      <ol>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ol>
      <br />
      <button className="btn btn-success" onClick={getProducts}>
        Get Products
      </button>
    </>
  );
}

export default App;
