function Navbar({ categories }) {
  return (
    <>
      <ul className="nav">
        {/* {categories.map()} */}
        {categories.map((category) => (
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="https://www.google.com"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
