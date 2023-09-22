import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(1);
  const [products, setProducts] = useState([]);

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

  function getProducts(searchText = null) {
    console.log("!!!!!!!!!!!!!!", searchText);
    let url =
      "https://django-rest-product.onrender.com/product?category=" +
      currentCategory;
    if (searchText) {
      url =
        "https://django-rest-product.onrender.com/product?search=" + searchText;
    }
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // example of filter in client
  // function searchProduct(searchText) {

  //   const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchText.toLowerCase())
  // );
  // setProducts(filteredProducts);
  // }

  function searchProduct(searchText) {
    console.log("searching for product", searchText);
    getProducts(searchText);
    setCurrentCategory("stamsadgfsadhgdshrfdrah"); // setting the category so that the last category will work if clicked again.
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          categories={categories}
          clickButton={clickButton}
          searchProduct={searchProduct}
        />
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
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
