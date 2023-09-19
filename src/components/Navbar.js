function Navbar({ categories, clickButton  }) {
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
      </ul>
    </>
  );
}

export default Navbar;
