"use client";
import "./styles/Navbar.css"; // Ensure CSS is imported

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white custom-brand" href="/">Digital BodyBuilder</a>
        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav d-flex flex-column flex-lg-row"> {/* Vertical on mobile, horizontal on large screens */}
            <a className="nav-link px-3 custom-nav-link" href="/about">About</a>
            <a className="nav-link px-3 custom-nav-link" href="/services">Services</a>
            <a className="nav-link px-3 custom-nav-link" href="/spare_parts">Spare Parts</a>
            <a className="nav-link px-3 custom-nav-link" href="/gallery">Gallery</a>
            <a className="nav-link px-3 custom-nav-link" href="/contact">Contact</a>
            <a className="nav-link px-3 custom-nav-link" href="/login">Login</a>
            <a className="nav-link px-3 custom-nav-link" href="/register">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
