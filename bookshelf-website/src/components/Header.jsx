import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">BookStore</a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
            <a href="/books" className="text-base font-medium text-gray-500 hover:text-gray-900">Books</a>
            <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
            <a href="/personal-bookshelf" className="text-base font-medium text-gray-500 hover:text-gray-900">Personal Bookshelf</a>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md w-5/6 max-w-sm mx-auto">
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                onClick={toggleModal}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <a href="/about" className="block text-base font-medium text-gray-500 hover:text-gray-900">About</a>
              <a href="/books" className="block text-base font-medium text-gray-500 hover:text-gray-900">Books</a>
              <a href="/blog" className="block text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
              <a href="/personal-bookshelf" className="block text-base font-medium text-gray-500 hover:text-gray-900">Personal Bookshelf</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
