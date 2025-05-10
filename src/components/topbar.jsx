import { useEffect, useState } from "react";
import "../styles/topbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.querySelector(".topbar");
      if (window.scrollY > 50) {
        topbar.classList.add("scrolled");
      } else {
        topbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="topbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Parfumex" className="logo" />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <div>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
          </div>
          <div>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
          </div>
          <div className="search-bar">
            <input type="search" placeholder="Search perfumes..." />
            <button className="btn">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
