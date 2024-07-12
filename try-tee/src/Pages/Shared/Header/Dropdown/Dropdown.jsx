import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ user, logout, avatarUrl, userName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-container">
      <div className={`dropdown-root ${isExpanded ? "expanded" : "collapsed"}`}>
        <button
          className={`toggle-button ${isExpanded ? "expanded" : ""}`}
          onClick={toggleDropdown}
        >
          {isExpanded ? (
            <div>
              <svg className="close-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </div>
          ) : (
            <img className="avatar-img" src={avatarUrl} alt="Avatar" />
          )}
        </button>
        <div className="dropdown-content border-b-2 border-blue-500">
          <ul className="dropdown-list">
            <li className="dropdown-list-item">
              <a href="#">{userName}</a>
            </li>
            <li className="dropdown-list-item">
              <Link to={"/cart"}>
                <p>Cart</p>
              </Link>
            </li>
            <li className="dropdown-list-item">
              <Link to={"/wishlist"}>
                <p>Wishlisht</p>
              </Link>
            </li>
            <li className="dropdown-list-item">
              <Link to={"/profile"}>
                <p>Profile</p>
              </Link>
            </li>
            <li className="dropdown-list-item">
              <button
                onClick={logout}
                className="btn-block btn-warning font-bold btn"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
