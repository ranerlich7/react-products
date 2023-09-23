import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Register from "./components/Register";
//https://django-rest-product.onrender.com
const HOST = "http://127.0.0.1:8000";
function ProductList() {
  const location = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This function will be called whenever the route (URL) changes
    console.log("Route has changed:", location.pathname);
    getProducts(null, category);

    // You can perform actions based on the new route here
    // For example, fetch data, update state, or trigger other logic
  }, [location.pathname]); // Incl
  function getProducts(search = null, category = null) {
    let url = HOST + "/product?category=" + (category || "");
    if (search) {
      url = HOST + "/product?search=" + search;
    }
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 401) {
          console.log("Navigating to /error");

          navigate("/error");
        }
      });
  }
  return (
    <div>
      <h1>Product List</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Product product={product} />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(getCategories, []); // Fetch categories when the component mounts

  function loginUser(username, password) {
    console.log("login!!!", username);
    axios
      .post(HOST + "/token/", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access);
        setIsLoggedIn(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
      })
      .catch((error) => {
        console.error("Error in login:", error);
      });
  }

  function getCategories() {
    axios
      .get(HOST + "/category")
      .then((response) => {
        console.log("categories are:", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function search(search) {
    // getProducts(search);
  }

  return (
    <BrowserRouter>
      <Navbar categories={categories} search={search} />
      <Routes>
        <Route path="/:category?" element={<ProductList />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
