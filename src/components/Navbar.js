import { Link } from "react-router-dom";

function Navbar({ categories, clickButton }) {
  function searchProduct() {
    console.log("searching for product");
  }
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <button className="nav-link" onClick={() => clickButton("")}>
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <button
              className="nav-link"
              onClick={() => clickButton(category.id)}
            >
              {category.name} -({category.id})
            </button>
          </li>
        ))}
        <li className="nav-item">
          <input />
        </li>
        <li className="nav-item">
          <button className="btn btn-info" onClick={searchProduct}>
            Search
          </button>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
