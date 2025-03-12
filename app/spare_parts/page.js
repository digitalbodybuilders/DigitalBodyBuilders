
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

  const handleShow = (part) => setSelectedPart(part);
  const handleClose = () => setSelectedPart(null);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary" style={{ paddingTop: "50px" }}>Spare Parts</h1>
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

      {selectedPart && (
        <Modal show={true} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPart.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPart.image}
              alt={selectedPart.title}
              className="img-fluid mb-3"
              style={{ borderRadius: "8px" }}
            />
            <p>{selectedPart.fullDescription}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
