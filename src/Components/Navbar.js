import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img
            src="/assets/Quill.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          <span className="ms-2 navbar-text">
            Writer's Journey
          </span>
          
        </Link>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
           <Link to="/challenge" class="nav-link active" aria-current="page">
            Daily Challenge
          </Link> 
          </li>
          <li>
             <Link to="/profile" class="nav-link active" aria-current="page">
            Profile
          </Link>
          </li>
         
        </ul>

  <div class="col-md-3 text-end">
    <button type="button" class="btn btn-outline-primary me-2">
      Login
    </button>
    <button type="button" class="btn btn-primary">
      Sign-up
    </button>
  </div>

      </div>
    </nav>
  );
};

export default Navbar;

