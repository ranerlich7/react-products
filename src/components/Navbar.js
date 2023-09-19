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
          <a className="nav-link" href="http://localhost:3000/login">
            Login
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
