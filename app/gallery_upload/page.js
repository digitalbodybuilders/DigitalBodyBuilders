"use client";
import { useState } from "react";

export default function GalleryUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]); // start with empty list

  // Handle file uploads
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]); // append uploaded images
  };

  return (
    <div
      className="container-fluid p-0"
      style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}
    >
      <h2 className="text-center text-primary my-5">Our Gallery</h2>

      {/* Upload button */}
      <div className="text-center mb-4">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </div>

      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div
              className="gallery-image-box"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <div className="popup-box">
              <img
                src={selectedImage}
                alt="Selected"
                className="popup-image"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-image-box {
          overflow: hidden;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
          border: 5px solid rgb(243, 243, 243);
          border-radius: 8px;
        }

        .gallery-image-box:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        }

        .img-fluid {
          width: 100%;
          height: 200px;
          object-fit: cover;
          padding: 5px;
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          position: relative;
          width: 90%;
          max-width: 1000px;
          height: 80%;
        }

        .popup-box {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          height: 100%;
        }

        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          color: black;
          font-size: 30px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover {
          color: #ff5050;
        }

        @media (max-width: 767px) {
          .img-fluid {
            height: 150px;
          }
        }

        @media (min-width: 768px) {
          .img-fluid {
            height: 250px;
          }
        }

        @media (min-width: 992px) {
          .img-fluid {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
