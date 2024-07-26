import React, {  useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive((prevActive) => !prevActive);
  };

  const toggleSidebar = () => {
    setIsSidebarActive((prevActive) => !prevActive);
  };

  return (
    <nav className="nav-menu">
      <div className="nav-bar">
        <IoReorderThreeOutline
          className="sidebarOpen"
          style={{
            fontSize: "3rem",
            cursor: "pointer",
          }}
          onClick={toggleSidebar}
        />
        <span className="logo navLogo">
          <Link to="/">Ankur</Link>
        </span>
        <div className={` ${isSidebarActive ? "mobileMenu" : "menu"}`}>
          <div className="logo-toggle">
            <span className="logo">
              <Link to="/">Ankur</Link>
            </span>
            <IoReorderThreeOutline
              className="siderbarClose"
              style={{
                fontSize: "3rem",
                cursor: "pointer",
              }}
              onClick={toggleSidebar}
            />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">AddSchool</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="searchBox">
          <div
            className={`searchToggle ${isSearchActive ? "active" : ""}`}
            onClick={toggleSearch}
          >
            <IoSearch
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "white",
                display: isSearchActive ? "none" : "block",
              }}
            />

            <CiCircleRemove
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "white",
                display: !isSearchActive ? "none" : "block",
              }}
            />
          </div>
          <div className="search-field">
            <input type="text" placeholder="Search..." />
            <IoSearch
              style={{
                fontSize: "1.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
