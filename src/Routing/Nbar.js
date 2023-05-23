import { Link } from "react-router-dom";
import React from "react";
function Nbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <Link class="navbar-brand" href="#">
          Product Management System
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/add" class="nav-link" href="#">
                AddProduct
              </Link>
            </li>
             <li class="nav-item active">
              <Link to="/reg" class="nav-link" href="#">
              Register
              </Link>
              </li>
              <li class="nav-item active">
             <Link to="/Login" class="nav-link" href="#">
             LogIn
           </Link>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nbar;
