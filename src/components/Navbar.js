import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ categories, clickButton, search }) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            All
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <Link className="nav-link" to={"/" + category.id}>
              {category.name} -({category.id})
            </Link>
          </li>
        ))}

        <li className="nav-item">
          <div className="nav-item">
            Search: <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => search(searchText)} className="btn btn-info">
              Search
            </button>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
