import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.works);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (book) => {
    if (wishlist.includes(book.key)) {
      setWishlist(wishlist.filter(item => item !== book.key));
    } else {
      setWishlist([...wishlist, book.key]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.key} className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-700">Author: {book.authors && book.authors.map(author => author.name).join(', ')}</p>
            <p className="text-gray-700">First Published: {book.first_publish_year}</p>
            <button 
              className={`absolute top-4 right-4 ${wishlist.includes(book.key) ? 'text-red-500' : 'text-gray-400'}`}
              onClick={() => toggleWishlist(book)}
            >
              <FontAwesomeIcon icon={faHeart} size="sm" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
