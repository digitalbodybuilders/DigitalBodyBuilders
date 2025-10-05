
"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar fixed-top custom-navbar" role="navigation">
        <div className="nav-inner container">
          <a className="navbar-brand custom-brand d-flex align-items-center" href="/" onClick={close}>
            <img
              src="/images/logo3.png"
              alt="Digital Bodybuilders"
              className="brand-img"
            />
            <span className="brand-text">DIGITAL BODYBUILDERS</span>
          </a>

          {/* Classic 3-line hamburger */}
          <button
            className="nav-toggle"
            onClick={toggle}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          {/* Links */}
          <div className={`nav-links ${open ? "open" : ""}`}>
            <a className="nav-link custom-nav-link" href="/about" onClick={close}>About</a>
            <a className="nav-link custom-nav-link" href="/services" onClick={close}>Services</a>
            <a className="nav-link custom-nav-link" href="/spare_parts" onClick={close}>Spare Parts</a>
            <a className="nav-link custom-nav-link" href="/gallery" onClick={close}>Gallery</a>
            {/* <a className="nav-link custom-nav-link" href="/gallery_upload" onClick={close}>Gallery Upload</a> */}
            <a className="nav-link custom-nav-link" href="/contact" onClick={close}>Contact</a>
            <a className="nav-link custom-nav-link" href="/login" onClick={close}>Login</a>
            <a className="nav-link custom-nav-link" href="/register" onClick={close}>Register</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .custom-navbar {
          background-color: rgba(0, 0, 0, 0.6);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
          z-index: 1100;
          width: 100%;
          backdrop-filter: blur(4px);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.4rem 1rem;
        }

        /* Brand */
        .custom-brand {
          text-decoration: none;
          color: #fff;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        /* Hover effect: golden glow */
        .custom-brand:hover .brand-img,
        .custom-brand:hover .brand-text {
          filter: drop-shadow(0 0 8px gold) brightness(1.2);
        }

        .brand-img {
          height: clamp(48px, 9vw, 100px);
          width: auto;
          transition: all 0.3s ease;
        }

        .brand-text {
          font-weight: 700;
          color: white;
          font-size: clamp(14px, 2.2vw, 20px);
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        /* Desktop nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          color: white;
          padding: 0.5rem 0.9rem;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          transition: background 150ms ease, transform 150ms ease, color 150ms ease;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
          color: #e6f7ff;
        }

        /* Hamburger for mobile */
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .nav-toggle .bar {
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 2px;
        }

        /* Small screens */
        @media (max-width: 991px) {
          .nav-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: calc(var(--nav-height, 72px));
            left: 0;
            right: 0;
            display: none;
            flex-direction: column;
            gap: 0;
            background: rgba(0, 0, 0, 0.85);
            padding: 0.6rem;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            max-height: calc(100vh - 72px);
            overflow-y: auto;
            z-index: 1050;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-link {
            display: block;
            padding: 0.85rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.03);
            text-align: center;
          }

          .nav-inner {
            padding: 0.5rem 0.85rem;
          }

          .brand-img {
            height: clamp(44px, 12vw, 72px);
          }

          .brand-text {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
