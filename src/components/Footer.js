import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-2 text-muted">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link px-2 text-muted">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.google.com"
                className="nav-link px-2 text-muted"
              >
                Google
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
          {/* local image in public folder example */}
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
        </footer>
      </div>
    </>
  );
}

export default Footer;
