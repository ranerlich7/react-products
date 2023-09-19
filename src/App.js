import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(getProducts, []); // when loading the page for the first time - getProducts()
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
      <Navbar />
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
        {products.map((product) => (
          <div className="col">
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
