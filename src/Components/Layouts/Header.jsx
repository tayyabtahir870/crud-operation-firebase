import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../firebase";

function Header() {
  const navigate = useNavigate("");

  const signoutclick = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/adddata" className="nav-link" href="#">
              <button type="button" class="btn btn-secondary">
                Add New Record
              </button>
            </Link>

            <Link to="/hero" className="nav-link" href="#">
              <button type="button" class="btn btn-info">
                Contact Us
              </button>
            </Link>
            <a className="nav-link" href="#">
              <button
                onClick={() => signoutclick()}
                type="button"
                class="btn btn-primary"
              >
                Sign Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
