import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(getProducts, []); // when loading the page for the first time - getProducts()
  useEffect(getCategories, []); // when loading the page for the first time - getCategories()

  function getCategories() {
    axios
      .get("https://django-rest-product.onrender.com/category")
      .then((response) => {
        console.log("categories are:", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

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
      <Navbar categories={categories} />
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Product product={product} />
          </div>
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
