import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 text-center">
        
  
        <h1 className="text-2xl font-bold">SubcriptionBox</h1>


        <div className="flex flex-col space-y-2 text-sm">
          <a href="/terms" className="hover:underline hover:text-gray-300 transition">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline hover:text-gray-300 transition">
            Privacy Policy
          </a>
        </div>


        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaTwitter className="text-white text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>

       
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} SubcriptionBox. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
