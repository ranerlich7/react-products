import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(getProducts, [currentCategory]); // when loading the page for the first time - getProducts()
  useEffect(getCategories, []);

  function getCategories() {
    axios
      .get("https://django-rest-product.onrender.com/category")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function getProducts() {
    axios
      .get("https://django-rest-product.onrender.com/product?category=" + currentCategory)
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
      <BrowserRouter>
        <Navbar categories={categories} setCurrentCategory={setCurrentCategory} />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
                  {products.map((product) => (
                    <div key={product.id} className="col">
                      <Product product={product} />
                    </div>
                  ))}
                </div>
                <br />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
