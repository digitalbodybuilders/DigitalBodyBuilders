// components/Navbar.js
"use client";
import "./styles/Navbar.css"; // Ensure CSS is imported

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-white custom-brand" href="/">Digital BodyBuilder</a>
          <div className="d-flex">
            <a className="nav-link px-3 custom-nav-link" href="/about">About</a>
            <a className="nav-link px-3 custom-nav-link" href="/services">Services</a>
            <a className="nav-link px-3 custom-nav-link" href="/models">Programs</a>
            <a className="nav-link px-3 custom-nav-link" href="/gallery">Gallery</a>
            <a className="nav-link px-3 custom-nav-link" href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    );
}
