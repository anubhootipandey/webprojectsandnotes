import React, { useState, useEffect } from 'react';

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=6');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFeaturedBooks(data.works);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFeaturedBooks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the BookStore</h1>
      <p className="text-gray-700 mb-6">Discover a wide variety of books across different genres. Start exploring now!</p>
      
      <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
      
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredBooks.map((book) => (
            <div key={book.key} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700">Author: {book.authors && book.authors.map(author => author.name).join(', ')}</p>
              <p className="text-gray-700">First Published: {book.first_publish_year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
