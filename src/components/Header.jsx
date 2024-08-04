import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary rounded">
          <div className="container-fluid">
            <NavLink className="navbar-brand fs-4 " to="/recipePage">
              Recipe Organizer
            </NavLink>
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary"
                    aria-current="page"
                    to="/recipePage"
                  >
                    Recipes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-primary" to="/addRecipes">
                    Add Recipe
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
