"use client";

import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary" style={{ paddingTop: '50px' }}>Contact Us</h1>

      <div className="row">
        <div className="col-md-6">
          <h3>Get In Touch</h3>
          <p>We would love to hear from you! Feel free to reach out to us using any of the following methods:</p>
          <ul>
            <li><strong>Phone:</strong> Md. Nasir Uddin Babu (MD)</li>
            <li><strong>Phone:</strong>+8801716248817</li>
            <li><strong>Email:</strong> info@digitalbodybuilder.com</li>
            <li><strong>Address:</strong> Boliarpur Bus Station, Savar, Dhaka, Bangladesh</li>
            <li><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div> */}
      </div>

      <div className="mt-5">
        <h3>Find Us on Google Maps</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2572796020974!2d90.2898261!3d23.7952393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ea9a79624333%3A0xa603a969de68d0ac!2sBoliarpur%20Bus%20Station!5e0!3m2!1sen!2sbd!4v1689846532910!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}