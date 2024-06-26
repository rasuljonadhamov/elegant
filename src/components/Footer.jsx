import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left flex gap-12 items-center">
          <h2 className="text-2xl font-semibold border-r pr-14">Elegant</h2>
          <p className="text-gray-400">Gift & Decoration Store</p>
        </div>
        <nav className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <Link to="/" className="text-gray-400 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/shop" className="text-gray-400 hover:text-white mx-2">
            Shop
          </Link>
          <Link to="/product" className="text-gray-400 hover:text-white mx-2">
            Product
          </Link>
          <Link to="/blog" className="text-gray-400 hover:text-white mx-2">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="text-center mt-8 flex items-center justify-center gap-10">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Elegant. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm  lg:flex gap-12 items-center">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-use" className="hover:text-white">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
