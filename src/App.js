import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NoPage from "./components/NoPage";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(1);

  useEffect(getProducts, [currentCategory]); // when loading the page for the first time - getProducts()
  useEffect(getCategories, []); // when loading the page for the first time - getCategories()
  function clickButton(id) {
    console.log("click!", id);
    setCurrentCategory(id);
  }
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
      .get(
        "https://django-rest-product.onrender.com/product?category=" +
          currentCategory
      )
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
        <Navbar categories={categories} clickButton={clickButton} />
        <Routes>
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
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
