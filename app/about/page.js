

// "use client";
// import Image from "next/image";

// export default function About() {
//     return (
//         <div className="container-fluid p-0">
//             {/* Top section with background image */}
//             <div className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center">
//                 <h1 className="display-4 fw-bold animated-title">About Digital Bodybuilders</h1>
//                 <p className="lead">Leading the Future of Industrial Innovation</p>
//             </div>

//             {/* Content section */}
//             <div className="container py-5 bg-white">
//                 {/* Introduction Section */}
//                 <div className="row w-100 my-4">
//                     <div className="col-md-6 d-flex align-items-center justify-content-center">
//                         <Image 
//                             src="/images/wksp5.jpg" 
//                             width={1000} 
//                             height={600} 
//                             className="img-fluid rounded shadow-lg hover-scale w-100" 
//                             alt="Company Building" 
//                         />
//                     </div>
//                     <div className="col-md-6 d-flex align-items-center">
//                         <div>
//                             <h2 className="text-primary">Introduction</h2>
//                             <p className="text-muted">Digital Bodybuilders is one of the leading industrial conglomerates in Bangladesh. Over the years, with the support of a highly skilled management team and 120 dedicated professionals, Digital Bodybuilders has achieved an unparalleled level of success in the country’s business history.</p>
//                             <p className="text-muted">The company has established itself as a key player in the AC sector, operating in areas such as AC buses, AC parts, engines, compressors, dynamos, cooling fans, heating chambers, and bus body manufacturing. Several of its units have been successfully listed in the bus bodybuilding industry.</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Market Leader Section */}
//                 <div className="row w-100 my-4">
//                     <div className="col-md-6 d-flex align-items-center">
//                         <p className="text-muted">Digital Bodybuilders is the market leader in bus body manufacturing in Bangladesh. The company has extensively focused on bus model development and next-generation bus innovations through major investment initiatives. By implementing a strategic business-to-business approach, Digital Bodybuilders has significantly contributed to the country’s economic stability.</p>
//                     </div>
//                     <div className="col-md-6 d-flex align-items-center justify-content-center">
//                         <Image 
//                             src="/images/car1.jpg" 
//                             width={1000} 
//                             height={600} 
//                             className="img-fluid rounded shadow-lg hover-scale w-100" 
//                             alt="Bus Assembly Line" 
//                         />
//                     </div>
//                 </div>

//                 {/* Economic Impact Section */}
//                 <div className="row w-100 my-4">
//                     <div className="col-md-6 d-flex align-items-center">
//                         <p className="text-muted">The company’s primary objective is to reduce rural poverty and foster sustainable economic development in Bangladesh.</p>
//                     </div>
//                 </div>

//                 {/* Vision & Mission Section */}
//                 <div className="mt-5 text-center">
//                     <h2 className="mb-3 text-primary">Vision & Mission</h2>
//                     <p className="text-muted">The company aims to become a world-class corporate entity by delivering exceptional products, services, and values. With a strong emphasis on continuous development, innovation, and customer satisfaction, Digital Bodybuilders strives to set new industry standards and drive sustainable growth in the market.</p>
//                 </div>

//                 {/* Leadership Section */}
//                 <div className="mt-5">
//                     <h2 className="text-primary text-center">Leadership</h2>
//                     <ul className="list-group list-group-flush text-center mt-3">
//                         <li className="list-group-item text-muted">MD Nasir Uddin Babu – Founder & Chairman of Digital Bodybuilders</li>
//                         <li className="list-group-item text-muted">Nurujjaman – Chairman</li>
//                         <li className="list-group-item text-muted">MD Nahid Morshed – CEO</li>
//                     </ul>
//                     <p className="text-muted text-center mt-3">Under their leadership, Digital Bodybuilders has established itself as a market leader, driving innovation and excellence in the industry.</p>
//                 </div>

//                 {/* Founding & Ownership Section */}
//                 <div className="mt-5 text-center">
//                 <div className="col-md-6 d-flex align-items-center justify-content-center">
//                         <Image 
//                             src="/images/wksp6.jpg" 
//                             width={1000} 
//                             height={600} 
//                             className="img-fluid rounded shadow-lg hover-scale w-100" 
//                             alt="Factory Production" 
//                         />
//                     </div>
//                     <h2 className="mb-3 text-primary">Founding & Ownership</h2>
//                     <p className="text-muted">Digital Bodybuilders was founded by Nurujjaman (Chairman) and MD Nasir Uddin Babu (Managing Director). Their vision and leadership have played a pivotal role in shaping the company into a market leader in the industry.</p>
//                 </div>

//                 {/* Subsidiaries Section */}
//                 <div className="mt-5 text-center">
//                     <h2 className="mb-3 text-primary">Subsidiaries</h2>
//                     <p className="text-muted">Some of Digital Bodybuilders’ subsidiaries include Bus Operator Digital Express, Digital Car Service, and others. These subsidiaries enhance the company’s diversified business operations and reinforce its leadership in the industry.</p>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .about-banner {
//                     background-image: url('/images/wksp4.jpg');
//                     background-size: cover;
//                     background-position: center;
//                     height: 35vh;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     align-items: center;
//                 }

//                 .animated-title {
//                     animation: fadeIn 2s ease-in-out;
//                 }

//                 .hover-scale {
//                     transition: transform 0.3s ease-in-out;
//                 }

//                 .hover-scale:hover {
//                     transform: scale(1.08);
//                 }

//                 @keyframes fadeIn {
//                     from { opacity: 0; }
//                     to { opacity: 1; }
//                 }
//             `}</style>
//         </div>
//     );
// }




"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className="container-fluid p-0">
            {/* Top section with background image */}
            <div className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center">
                <h1 className="display-4 fw-bold animated-title">About Digital Bodybuilders</h1>
                <p className="lead">Leading the Future of Industrial Innovation</p>
            </div>

            {/* Content section */}
            <div className="container py-5 bg-light">
                {/* Introduction Section */}
                <div className="row w-100 my-5">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <Image 
                            src="/images/wksp5.jpg" 
                            width={1000} 
                            height={600} 
                            className="img-fluid rounded shadow-lg hover-scale w-100" 
                            alt="Company Building" 
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2 className="text-primary fw-bold">Introduction</h2>
                            <p className="text-dark">Digital Bodybuilders is one of the leading industrial conglomerates in Bangladesh. Over the years, with the support of a highly skilled management team and 120 dedicated professionals, Digital Bodybuilders has achieved an unparalleled level of success in the country’s business history.</p>
                            <p className="text-dark">The company has established itself as a key player in the AC sector, operating in areas such as AC buses, AC parts, engines, compressors, dynamos, cooling fans, heating chambers, and bus body manufacturing. Several of its units have been successfully listed in the bus bodybuilding industry.</p>
                        </div>
                    </div>
                </div>

                {/* Market Leader Section */}
                <div className="row w-100 my-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="text-dark">Digital Bodybuilders is the market leader in bus body manufacturing in Bangladesh. In addition to this, the company has extensively focused on bus model development and next-generation bus innovations through major investment initiatives. By implementing a strategic business-to-business approach, Digital Bodybuilders has significantly contributed to the country’s economic stability.</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <Image 
                            src="/images/car1.jpg" 
                            width={1000} 
                            height={600} 
                            className="img-fluid rounded shadow-lg hover-scale w-100" 
                            alt="Bus Assembly Line" 
                        />
                    </div>
                </div>

                {/* Economic Impact Section */}
                <div className="row w-100 my-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="text-dark">The company’s primary objective is to reduce rural poverty and foster sustainable economic development in Bangladesh.</p>
                    </div>
                </div>

                {/* Vision & Mission Section */}
                <div className="mt-5 text-center">
                    <h2 className="mb-3 text-success fw-bold">Vision & Mission</h2>
                    <p className="text-dark">The company aims to become a world-class corporate entity by delivering exceptional products, services, and values. With a strong emphasis on continuous development, innovation, and customer satisfaction, Digital Bodybuilders strives to set new industry standards and drive sustainable growth in the market.</p>
                </div>

                {/* Leadership Section */}
                <div className="mt-5">
                    <h2 className="text-danger text-center fw-bold">Leadership</h2>
                    <ul className="list-group list-group-flush text-center mt-3">
                        <li className="list-group-item text-dark">MD Nasir Uddin Babu – Founder & Chairman of Digital Bodybuilders</li>
                        <li className="list-group-item text-dark">Nurujjaman – Chairman</li>
                        <li className="list-group-item text-dark">MD Nahid Morshed – CEO</li>
                    </ul>
                    <p className="text-dark text-center mt-3">Under their leadership, Digital Bodybuilders has established itself as a market leader, driving innovation and excellence in the industry.</p>
                </div>

                {/* Founding & Ownership Section */}
                <div className="mt-5 text-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-center mx-auto">
                        <Image 
                            src="/images/wksp6.jpg" 
                            width={1000} 
                            height={600} 
                            className="img-fluid rounded shadow-lg hover-scale w-100" 
                            alt="Factory Production" 
                        />
                    </div>
                    <h2 className="mb-3 text-warning fw-bold">Founding & Ownership</h2>
                    <p className="text-dark">Digital Bodybuilders was founded by Nurujjaman (Chairman) and MD Nasir Uddin Babu (Managing Director). Their vision and leadership have played a pivotal role in shaping the company into a market leader in the industry.</p>
                </div>

                {/* Subsidiaries Section */}
                <div className="mt-5 text-center">
                    <h2 className="mb-3 text-info fw-bold">Subsidiaries</h2>
                    <p className="text-dark">Some of Digital Bodybuilders’ subsidiaries include Bus Operator Digital Express, Digital Car Service, and others. These subsidiaries enhance the company’s diversified business operations and reinforce its leadership in the industry.</p>
                </div>
            </div>

            <style jsx>{`
                .about-banner {
                    background-image: url('/images/wksp4.jpg');
                    background-size: cover;
                    background-position: center;
                    height: 40vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
                }

                .animated-title {
                    animation: fadeIn 2s ease-in-out;
                }

                .hover-scale {
                    transition: transform 0.3s ease-in-out;
                }

                .hover-scale:hover {
                    transform: scale(1.05);
                }

                .list-group-item {
                    background-color: #f8f9fa;
                    font-weight: bold;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
