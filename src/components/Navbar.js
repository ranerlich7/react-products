import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ categories, setCurrentCategory }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (category_id) => {
    setCurrentCategory(category_id);
    navigate("/");
  };
  return (
    <>
      <ul className="nav m-2">
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <button onClick={() => handleClick(category.id)} className="nav-link active">
              {category.name}
            </button>
          </li>
        ))}
        {location.pathname !== "/login" && (
          <li className="nav-item">
            <Link className="btn btn-info" to="login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default Navbar;
