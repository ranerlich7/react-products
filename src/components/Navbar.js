import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ categories, clickButton, searchProduct }) {
  const [searchText, setSearchText] = useState(""); // this is the value of the search field
  const location = useLocation();

  return (
    <>
      <ul className="nav">
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
            className="btn btn-info"
            onClick={() => searchProduct(searchText)}
          >
            Search
          </Link>
        </li>
        {location.pathname === "/login" ? null : (
          <li className="nav-item">
            <Link className="btn btn-success" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default Navbar;
