import React, { useState, useEffect } from 'react';

const PersonalBookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    fetchBooksFromWishlist(savedWishlist);
  }, []);

  const fetchBooksFromWishlist = async (wishlist) => {
    try {
      const bookPromises = wishlist.map(async (bookKey) => {
        const response = await fetch(`https://openlibrary.org${bookKey}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      });
      const books = await Promise.all(bookPromises);
      setBookshelf(books);
    } catch (error) {
      console.error('Failed to fetch book details', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book) => (
          <div key={book.key} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-700">Author: {book.authors && book.authors.map(author => author.name).join(', ')}</p>
            <p className="text-gray-700">First Published: {book.first_publish_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalBookshelf;
