// // components/Layout.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }


// components/Layout.js
"use client";

import { usePathname } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const pathname = usePathname();

  // Define the routes where Navbar should be visible
  const showNavbar = [
    "/", "/about", "/services", "/spare_parts", "/gallery", "/contact", "/login", "/register"
  ].includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
