function Navbar() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="https://www.google.com"
          >
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.google.com">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.google.com">
            Link
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
