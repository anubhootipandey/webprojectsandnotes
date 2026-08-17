import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">BookStore</h2>
            <p className="text-gray-400">Your one-stop shop for all your reading needs</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com"  className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com"  className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com"  className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
