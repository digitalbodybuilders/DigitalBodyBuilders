// app/page.js
"use client";

export default function Home() {
  return (
    <div>
    <div className="top-banner d-flex align-items-center justify-content-center text-white text-center" 
      style={{ 
        backgroundImage: 'url(/images/car6.jpg)', 
        height: '80vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 2s ease-in-out',
        // paddingTop: "50px", // Adjust as needed
        width: "100%",
        textAlign: "center"
      }}>
  <h1 className="display-3">
    <span className="brand-hover">DigitalBodyBuilder</span>
  </h1>
  <p className="lead">Building the Future of Cars with Innovation & Precision</p>
</div>


      <header className="hero-section text-white text-center d-flex align-items-center justify-content-center" style={{ 
        backgroundImage: 'url(/images/car-banner.jpg)', 
        height: '80vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div style={{ 
          backgroundImage: 'url(/images/car5.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          padding: '70px', 
          borderRadius: '10px' 
        }}>
          <h1 className="display-3">We make your dream come true</h1>
          <p className="lead">Building the Future of Cars with Innovation & Precision</p>
          <a href="/models" className="btn btn-primary btn-lg">Explore Models</a>
        </div>
      </header>

      {/* New Section with Static Boxes */}
      <section className="container text-center my-5">
        <h2>Our Expertise</h2>
        <div className="row mt-4">
          {['feature1', 'feature2', 'feature3', 'feature4'].map((feature, index) => (
            <div key={index} className="col-md-3">
              <div className="card shadow-sm feature-box">
                <img src={`/images/${feature}.jpg`} className="card-img-top feature-image" alt={`Feature ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">Feature {index + 1}</h5>
                  <p className="card-text">High-quality engineering, cutting-edge technology, and sustainable innovations.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container text-center my-5">
        <h2>Our Featured Models</h2>
        <div className="row mt-4">
          {['bus1.png', 'car1.jpg', 'bus3.jpg'].map((model, index) => (
            <div key={index} className="col-md-4">
              <div className="model-box">
                <img src={`/images/${model}`} className="img-fluid model-image" alt={`Car Model ${index + 1}`} />
                <h4 className="mt-3">Model {String.fromCharCode(88 + index)}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light py-5 text-center">
        <h2>Why Choose Us?</h2>
        <p className="lead">Innovation, Sustainability, and Performance in Every Car</p>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .brand-hover {
          display: inline-block;
          color: white;
          transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
          cursor: pointer;
        }

        .brand-hover:hover {
          transform: scale(1.1);
          text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
          color: #FFD700; /* Gold color */
        }

        .feature-box {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          border-radius: 10px;
          overflow: hidden;
        }

        .feature-box:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-image {
          transition: transform 0.3s ease-in-out;
          border-radius: 10px 10px 0 0;
        }

        .feature-box:hover .feature-image {
          transform: scale(1.1);
        }

        .model-box {
          transition: transform 0.3s ease-in-out;
        }

        .model-box:hover {
          transform: scale(1.1);
        }

        .model-image {
          transition: transform 0.3s ease-in-out;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
