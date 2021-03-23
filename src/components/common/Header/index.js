import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      style={{ backgroundColor: "#eef8f6" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-2 fw-bold" style={{ color: "#03ab96" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-key-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="ms-2">wiiziikey</span>
        </a>
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
