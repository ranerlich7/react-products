import { Link } from "react-router-dom";

function Navbar({ categories, clickButton }) {
  return (
    <>
      <ul className="nav">
        {categories.map((category) => (
          <li className="nav-item">
            <button
              className="nav-link"
              aria-current="page"
              onClick={() => clickButton(category.id)}
            >
              {category.name} -({category.id})
            </button>
          </li>
        ))}
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
