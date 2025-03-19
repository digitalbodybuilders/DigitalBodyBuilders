"use client";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Bus Manufacturing",
      shortDescription:
        "State-of-the-art bus manufacturing using modern technologies and high-quality materials. Our buses are designed for durability and comfort, meeting international safety standards.",
      fullDescription:
        "Our bus manufacturing process involves cutting-edge technology and top-quality materials to ensure durability and comfort. We design buses that meet international safety standards while offering superior performance. Our production line is optimized for efficiency, and we take pride in creating reliable transportation solutions. Our team of experts works tirelessly to innovate and deliver the best products to our clients.",
      image: "/images/gallery/bus1.jpeg",
    },
    {
      title: "Bus Repair and Maintenance",
      shortDescription:
        "Comprehensive repair and maintenance services to keep your buses in top condition. Skilled technicians ensure longevity and performance.",
      fullDescription:
        "Our repair and maintenance services cover engine diagnostics, transmission repairs, and regular servicing. We use genuine parts and advanced tools to ensure long-lasting results. Our skilled technicians provide prompt and reliable services to minimize downtime and maximize your bus fleet's efficiency. Regular maintenance plans are available to keep your buses in top-notch condition.",
      image: "/images/gallery/bus2.jpeg",
    },
    {
      title: "Bus Customization",
      shortDescription:
        "Personalize your buses with custom interiors, exteriors, and branding solutions. Enhance passenger comfort and style.",
      fullDescription:
        "We offer comprehensive customization options to suit your unique needs. From luxurious seating arrangements to advanced infotainment systems, we ensure your buses reflect your brand identity. Our experts work closely with clients to deliver tailored solutions that enhance both aesthetics and functionality. Get the best out of your fleet with our bespoke customization services.",
      image: "/images/gallery/bus3.jpeg",
    },
    {
      title: "Fleet Management Solutions",
      shortDescription:
        "Advanced fleet management software to optimize routes, schedules, and maintenance. Improve efficiency and reduce costs.",
      fullDescription:
        "Our fleet management solutions provide real-time tracking, route optimization, and maintenance scheduling. Designed to increase operational efficiency, our software helps you monitor fuel consumption, driver performance, and vehicle health, enabling data-driven decisions and cost savings. Stay ahead with our cutting-edge technology.",
      image: "/images/gallery/bus4.jpeg",
    },
    {
      title: "Bus Paint and Refurbishing",
      shortDescription:
        "High-quality bus painting and refurbishing services. Revitalize the look and feel of your buses with a professional touch.",
      fullDescription:
        "Give your buses a fresh, professional appearance with our top-notch painting and refurbishing services. Using durable and vibrant paints, we ensure long-lasting finishes that resist fading and wear. Our team specializes in both complete repainting and touch-up services to keep your fleet looking pristine and appealing.",
      image: "/images/paint1.jpg",
    },
    {
      title: "Bus Safety and Security",
      shortDescription:
        "Ensure the safety and security of your passengers and drivers with advanced systems. Our solutions include GPS tracking, CCTV, and panic buttons.",
      fullDescription:
        "Our safety and security solutions encompass GPS tracking, CCTV surveillance, emergency panic buttons, and automated incident reporting. Enhance the safety of your passengers and drivers while maintaining real-time monitoring and reporting for optimal security management. Trust us to safeguard your fleet and maintain operational safety.",
      image: "/images/gallery/bus5.jpeg",
    },
    {
      title: "Passenger Comfort Solutions",
      shortDescription:
        "Upgrade passenger comfort with ergonomic seating, air conditioning, and entertainment systems. Enhance the travel experience.",
      fullDescription:
        "We provide top-tier passenger comfort solutions, including ergonomic seating, efficient climate control systems, and modern entertainment setups. Your passengers will enjoy a smooth and comfortable ride, whether for short commutes or long-distance travel. Make every journey pleasant and stress-free.",
      image: "/images/gallery/bus6.jpeg",
    },
    {
      title: "Electric and Hybrid Bus Solutions",
      shortDescription:
        "Transition to eco-friendly transportation with our electric and hybrid bus solutions. Reduce emissions and fuel consumption.",
      fullDescription:
        "Our electric and hybrid bus solutions focus on reducing environmental impact while maintaining performance. With cutting-edge battery technologies and hybrid powertrains, our buses offer efficient and sustainable transportation options. Join the green revolution and minimize your carbon footprint.",
      image: "/images/gallery/bus7.jpeg",
    },
    {
      title: "Spare Parts Supply",
      shortDescription:
        "Reliable supply of high-quality bus spare parts and accessories to keep your fleet running smoothly.",
      fullDescription:
        "Our spare parts supply chain ensures that your buses remain operational with minimal downtime. We stock a wide range of genuine parts and accessories from reputable manufacturers. Rely on our logistics network to deliver parts promptly and efficiently.",
      image: "/images/gallery/bus8.jpeg",
    },
    {
      title: "Bus Driver Training",
      shortDescription:
        "Professional training for bus drivers to ensure safety, efficiency, and customer satisfaction. Train your staff with certified experts.",
      fullDescription:
        "Our bus driver training programs are designed to equip drivers with the skills necessary to operate buses safely and efficiently. We focus on road safety, defensive driving techniques, and customer service. Our training modules are comprehensive and certified, ensuring that your drivers meet industry standards.",
      image: "/images/gallery/bus9.jpeg",
    },
  ];

  const handleShow = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  return (
    <div className="container-fluid" style={{ paddingTop: "80px" ,paddingLeft: "20px", paddingRight: "20px" }}>
      <h1 className="text-center text-primary mb-4">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-lg service-card"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{service.title}</h5>
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
                  {service.shortDescription}
                </p>
                <button
                  className="btn btn-link see-more p-0"
                  onClick={() => handleShow(service)}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  See More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal show={true} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedService.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="img-fluid mb-3"
              style={{ borderRadius: "8px" }}
            />
            <p>{selectedService.fullDescription}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
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

        .service-card {
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
