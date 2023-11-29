import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

function Navbar({ categories, clickButton, searchProduct }) {

  const [searchText, setSearchText] = useState(""); // this is the value of the search field
  const [loggedInUser, setLoggedInUser] = useState(false);
  const location = useLocation();
  const hello_style = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
  };
  useEffect(() => {
    // Check for a token in local storage when the component mounts
    const storedToken = localStorage.getItem('token');

    if (storedToken !== null ) {
      // Decode the token to get the expiration time
      const decodedToken = jwtDecode(storedToken);
      const expirationTime = decodedToken.exp;

      // Get the current time in seconds
      const currentTime = Math.floor(Date.now() / 1000);
      const user_id = decodedToken.user_id
      // Check if the token is expired
      const isTokenExpired = expirationTime < currentTime;
       console.log("token expire"+isTokenExpired)
      // Update the loggedInUser state based on token expiration
      if (isTokenExpired){
        setLoggedInUser(null)
        axios.defaults.headers.common['Authorization'] = null;
      } else {
        setLoggedInUser(user_id)
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
    }
  }, []); // The empty dependency array ensures this effect runs only once on mount

  function logout(){
    localStorage.removeItem('token');
    setLoggedInUser(false)
    // Reset Axios default headers
    delete axios.defaults.headers.common['Authorization'];
    alert('logged out')

  }
  return (
    <>
      <ul className="nav my-4 ">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => clickButton("")}>
            All Products
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => clickButton(category.id)}
            >
              {category.name} -({category.id})
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="mx-1 btn btn-info"
            onClick={() => searchProduct(searchText)}
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="mx-1 nav-link" to="/add_product">
            Add Product
          </Link>
        </li>
        {loggedInUser && (
            <>
            <li className="navbar-text  ml-auto" style={hello_style}>Hello! {loggedInUser}</li>
        <li className="nav-item  ml-auto">
        <Link
                  to="/login"
                  className="nav-link"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
        </li>
        </>
        )}
        {location.pathname === "/login" || loggedInUser ? null : (
          <li className="nav-item">
            <Link className="mx-1 btn btn-success" to="/login">
              Login
            </Link>
          </li>
        )}
        <li className="nav-item  ml-auto">
          <Link to="/cart">
            <BsCart4 style={{ fontSize: "2em", color: "blue" }} />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
