import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-links">
        <button key="Art" className="info-button" onClick={() => navigate("/")}>ART</button>
        <button key="Cloth" className="nav-button" onClick={() => window.open("https://www.google.com", "_blank")}>CLOTHING</button>
      </div>

      <div className="logo-container">
        HAREKH
      </div>

      <div className="nav-links">
        <button className="icon-container" onClick={() => window.open("https://www.instagram.com", "_blank")}><FaInstagram size={30} color="white" /></button>
      </div>
    </nav>
  );
};

export default Header; 