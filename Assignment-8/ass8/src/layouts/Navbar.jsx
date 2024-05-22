import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Assignment-8
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/one"}>
                One
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/two"}>
                Two
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/three"}>
                Three
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/four"}>
                Four
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/five"}>
                Five
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
