import React, { useState } from 'react';
import './BookMark.css';

function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewBookmark(e.target.value);
  };

  const handleAddBookmark = () => {
    if (newBookmark.trim() !== '') {
      if (editIndex !== null) {
        // Edit existing bookmark
        const updatedBookmarks = [...bookmarks];
        updatedBookmarks[editIndex] = newBookmark;
        setBookmarks(updatedBookmarks);
        setEditIndex(null);
      } else {
        // Add new bookmark
        setBookmarks([...bookmarks, newBookmark]);
      }
      setNewBookmark('');
    }
  };

  const handleEditBookmark = (index) => {
    setNewBookmark(bookmarks[index]);
    setEditIndex(index);
  };

  const handleDeleteBookmark = (index) => {
    const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="bookMark">
      <h1>Bookmark Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL or Bookmark Name"
          value={newBookmark}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBookmark}>{editIndex !== null ? 'Save' : 'Add Bookmark'}</button>
      </div>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark} target="_blank" rel="noopener noreferrer">{bookmark}</a>
            <button onClick={() => handleEditBookmark(index)}>Edit</button>
            <button onClick={() => handleDeleteBookmark(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookMark;
