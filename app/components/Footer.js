"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-light py-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-4 d-flex flex-column align-items-center text-center">
          <img
            src="/images/logo/logo3.png"
            alt="Company Logo"
            style={{ height: "150px", width: "auto", marginBottom: "1rem" }}
          />
          <p className="px-3">
            We are a leading provider of innovative transportation solutions. Our focus is on quality, efficiency, and customer satisfaction.
          </p>
          <div>
            <p><strong>Follow us on:</strong></p>
            <p>
              <a href="https://facebook.com" className="text-light mx-2" style={{ textDecoration: "none" }}>Facebook</a>
              <a href="https://twitter.com" className="text-light mx-2" style={{ textDecoration: "none" }}>Twitter</a>
              <a href="https://instagram.com" className="text-light mx-2" style={{ textDecoration: "none" }}>Instagram</a>
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-md-4 text-center">
          <h4 className="text-primary">Contact Information</h4>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@company.com</p>
        </div>

        {/* Right Section */}
        <div className="col-md-4 text-center">
          <h4 className="text-primary">Quick Links</h4>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-light" style={{ textDecoration: "none" }}>Home</a></li>
            <li><a href="#services" className="text-light" style={{ textDecoration: "none" }}>Services</a></li>
            <li><a href="#about" className="text-light" style={{ textDecoration: "none" }}>About</a></li>
            <li><a href="#contact" className="text-light" style={{ textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3">
        <p>&copy; 2025 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
