// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DigitalBodyBuilder. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  