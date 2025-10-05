
"use client";
import "./styles/Navbar.css"; // Ensure CSS is imported

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white custom-brand d-flex align-items-center" href="/">
          <img 
            src="/images/logo3.png" 
            alt="Digital Bodybuilders" 
            className="me-2" 
            style={{ height: "100px", width: "auto" }}
          />
          Digital BodyBuilder
        </a>
        <div className="d-flex">
          <a className="nav-link px-3 custom-nav-link" href="/about">About</a>
          <a className="nav-link px-3 custom-nav-link" href="/services">Services</a>
          <a className="nav-link px-3 custom-nav-link" href="/spare_parts">Spare Parts</a>
          <a className="nav-link px-3 custom-nav-link" href="/gallery">Gallery</a>
          <a className="nav-link px-3 custom-nav-link" href="/gallery_upload">Gallery Upload</a>
          <a className="nav-link px-3 custom-nav-link" href="/contact">Contact</a>
          <a className="nav-link px-3 custom-nav-link" href="/login">Login</a>
          <a className="nav-link px-3 custom-nav-link" href="/register">Register</a>
        </div>
      </div>
    </nav>
  );
}
