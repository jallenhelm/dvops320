import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 p-1 text-body-secondary">© 2024 Company, Inc</p>

        <Link
          to="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/Quill.png`}
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </Link>

        <ul class="nav col-md-4 p-1 justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/challenge" class="nav-link px-2 text-body-secondary">
              Daily Challenge
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" class="nav-link" aria-current="page">
              Leaderboard
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/profile" class="nav-link px-2 text-body-secondary">
              Profile
            </Link>
          </li>
        </ul>
      </footer>
    );
};

export default Footer;