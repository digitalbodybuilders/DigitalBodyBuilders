
"use client";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SpareParts() {
  const [selectedPart, setSelectedPart] = useState(null);

  const spareParts = [
    {
      title: "Engine Components",
      shortDescription:
        "High-quality engine parts to ensure optimal performance and longevity of your bus engines.",
      fullDescription:
        "Our engine components are crafted to meet the highest industry standards, ensuring durability and efficiency. From pistons and cylinders to camshafts and crankshafts, we offer a complete range of parts designed for various bus models. All our products are tested for quality and performance to keep your fleet running smoothly.",
      image: "/images/spare_parts/parts1.jpg",
    },
    {
      title: "Brake Systems",
      shortDescription:
        "Reliable brake parts to guarantee safety and precision in braking.",
      fullDescription:
        "We offer a comprehensive range of brake system components including brake pads, discs, calipers, and ABS modules. Our parts ensure effective braking performance under all conditions, maximizing passenger safety and vehicle control.",
      image: "/images/spare_parts/parts2.jpg",
    },
    {
      title: "Suspension and Steering",
      shortDescription:
        "Durable suspension and steering components for a smoother and safer ride.",
      fullDescription:
        "Our suspension and steering parts include shock absorbers, springs, control arms, and tie rods. They are designed to withstand heavy loads and rough terrains, ensuring stable and comfortable bus operation.",
      image: "/images/spare_parts/parts3.jpg",
    },
    {
      title: "Transmission Systems",
      shortDescription:
        "Top-notch transmission parts to enhance power delivery and vehicle efficiency.",
      fullDescription:
        "Our transmission components, including gearboxes, clutches, and torque converters, are engineered to deliver smooth and precise power transfer. Maintain your bus fleet’s reliability with our premium transmission solutions.",
      image: "/images/spare_parts/parts4.jpg",
    },
    {
      title: "Electrical and Lighting",
      shortDescription:
        "Robust electrical components and lighting systems for safety and visibility.",
      fullDescription:
        "From wiring harnesses and alternators to headlights and indicator lights, our electrical parts meet OEM specifications to ensure lasting performance and safety. Enhance visibility and electrical efficiency with our reliable solutions.",
      image: "/images/spare_parts/parts5.jpg",
    },
    {
      title: "Cooling Systems",
      shortDescription:
        "Efficient cooling solutions to maintain optimal engine temperature.",
      fullDescription:
        "Our cooling system parts include radiators, water pumps, and thermostats. Built to withstand high temperatures and resist corrosion, they guarantee consistent cooling and engine protection.",
      image: "/images/spare_parts/parts6.jpg",
    },
  ];

  // NOTE: fixed the typo "part23.jpeg" -> "parts23.jpeg"
  const sparePartImages = [
    "/images/spare_parts/parts10.jpeg",
    "/images/spare_parts/parts11.jpeg",
    "/images/spare_parts/parts12.jpeg",
    "/images/spare_parts/parts13.jpeg",
    "/images/spare_parts/parts15.jpeg",
    "/images/spare_parts/parts16.jpeg",
    "/images/spare_parts/parts17.jpeg",
    "/images/spare_parts/parts18.jpeg",
    "/images/spare_parts/parts19.jpeg",
    "/images/spare_parts/parts20.jpeg",
    "/images/spare_parts/parts21.jpeg",
    "/images/spare_parts/parts22.jpeg",
    "/images/spare_parts/parts23.jpeg", // <-- corrected
    "/images/spare_parts/parts24.jpeg",
    "/images/spare_parts/parts25.jpeg",
    "/images/spare_parts/parts26.jpeg",
    "/images/spare_parts/parts27.jpeg",
    "/images/spare_parts/parts28.jpeg",
    "/images/spare_parts/parts29.jpeg",
    "/images/spare_parts/parts30.jpeg",
    "/images/spare_parts/parts31.jpeg",
    "/images/spare_parts/parts32.jpeg",
  ];

  const handleShow = (part) => setSelectedPart(part);
  const handleClose = () => setSelectedPart(null);

  // lightweight SVG placeholder (data URI) so there is always something to show
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#f0f0f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#888' font-family='Arial' font-size='18'>Image not found</text></svg>`;
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  // handle image load errors: try common fixes then fall back to placeholder
  const handleImgError = (e) => {
    const img = e.target;
    const attempts = parseInt(img.dataset.attempt || "0", 10);
    const original = img.dataset.original || img.src;

    if (!img.dataset.original) img.dataset.original = original;

    // 1) try swapping .jpeg <-> .jpg once
    if (attempts === 0) {
      if (/\.jpeg$/i.test(original)) {
        img.dataset.attempt = "1";
        img.src = original.replace(/\.jpeg$/i, ".jpg");
        console.warn("Image failed — trying .jpg:", original);
        return;
      }
      if (/\.jpg$/i.test(original)) {
        img.dataset.attempt = "1";
        img.src = original.replace(/\.jpg$/i, ".jpeg");
        console.warn("Image failed — trying .jpeg:", original);
        return;
      }
    }

    // 2) try to fix common filename typos (e.g. /part23. -> /parts23.)
    if (attempts <= 1) {
      if (/\/part23\./.test(original)) {
        img.dataset.attempt = "2";
        img.src = original.replace("/part23.", "/parts23.");
        console.warn("Image failed — trying fix for part23 typo:", original);
        return;
      }
    }

    // 3) final fallback to placeholder
    img.dataset.attempt = String(attempts + 1);
    img.src = placeholder;
    console.warn("Image failed — using placeholder for:", original);
  };

  return (
    <div
      className="container-fluid"
      style={{ paddingTop: "80px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <h1 className="text-center text-primary mb-4">Spare Parts</h1>

      <div className="row">
        {spareParts.map((part, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-lg spare-part-card"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={part.image}
                className="card-img-top"
                alt={part.title}
                style={{ height: "250px", objectFit: "cover" }}
                onError={handleImgError}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{part.title}</h5>
                <p
                  className="card-text description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {part.shortDescription}
                </p>
                <button
                  className="btn btn-link see-more p-0"
                  onClick={() => handleShow(part)}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  See More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🧠 New Section: Spare Parts Images */}
      <h2 className="text-center text-secondary mt-5 mb-4">
        Spare Parts Sample
      </h2>

      <div className="row justify-content-center">
        {sparePartImages.map((img, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <img
              src={img}
              alt={`Spare Part ${index + 1}`}
              className="rounded shadow-sm"
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              onError={handleImgError}
            />
          </div>
        ))}
      </div>

      {selectedPart && (
        <Modal show={true} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedPart.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPart.image}
              alt={selectedPart.title}
              className="img-fluid mb-3"
              style={{ borderRadius: "8px" }}
              onError={handleImgError}
            />
            <p>{selectedPart.fullDescription}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <style jsx>{`
        .container-fluid {
          padding: 0;
        }

        .card {
          cursor: pointer;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        }

        .spare-part-card {
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-img-top {
          height: 250px;
          object-fit: cover;
        }

        .card-body {
          padding: 15px;
        }

        .description {
          display: -webkit-box;
          WebkitLineClamp: 3;
          WebkitBoxOrient: "vertical";
          overflow: hidden;
          textOverflow: "ellipsis";
        }

        .see-more {
          color: blue;
          cursor: pointer;
        }

        .see-more:hover {
          text-decoration: underline;
        }

        @media (min-width: 1200px) {
          .card-img-top {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
