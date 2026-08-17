import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = () => {
    const newBlog = { id: Date.now(), title, content, image };
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleAddBlog}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Blog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
            {blog.image && <img src={blog.image} alt={blog.title} className="mb-2 w-full h-48 object-cover rounded" />}
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-2">{blog.content}</p>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
