// app/about/page.js
"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className="container mt-5 pt-5 text-center">
            <h1 className="display-4 mb-4">About DigitalBodyBuilder</h1>
            <p className="lead">Revolutionizing the automotive industry with cutting-edge technology and innovative designs.</p>
            
            <div className="row mt-5">
                <div className="col-md-6">
                    <Image 
                        src="/images/car1.jpg" 
                        width={500} 
                        height={300} 
                        className="img-fluid rounded shadow-lg" 
                        alt="Car Production" 
                        style={{ transition: 'transform 0.3s', cursor: 'pointer' }} 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <p className="text-muted">At DigitalBodyBuilder, we specialize in designing and manufacturing high-performance cars, buses, and electric vehicles. Our commitment to sustainability and innovation drives us to build the future of transportation.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 d-flex align-items-center">
                    <p className="text-muted">From concept to production, our expert team ensures every vehicle meets the highest standards of quality and performance. Our advanced engineering techniques set us apart in the automotive industry.</p>
                </div>
                <div className="col-md-6">
                    <Image 
                        src="/images/bus2.jpg" 
                        width={500} 
                        height={300} 
                        className="img-fluid rounded shadow-lg" 
                        alt="Bus Factory" 
                        style={{ transition: 'transform 0.3s', cursor: 'pointer' }} 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    />
                </div>
            </div>

            <div className="mt-5">
                <h2 className="mb-3">Why Choose Us?</h2>
                <p className="text-muted">We combine technology, sustainability, and performance to deliver the best automotive solutions for the future.</p>
            </div>
        </div>
    );
}



// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="container text-center my-5">
//       <h1>About DigitalBodyBuilder</h1>
//       <p>We specialize in designing and manufacturing cutting-edge cars, buses, and vehicles.</p>
//       <Image src="/images/car1.jpg" alt="Car Image" width={500} height={300} />
//     </div>
//   );
// }