import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Use null instead of empty string for file

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', content);
      formData.append('image', image);

      const response = await axios.post('http://localhost:8002/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block font-bold mb-2">
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="block mt-2 text-sm text-gray-500">or</span>
            <input
              type="text"
              id="imageUrl"
              value={image || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              placeholder="Enter image URL"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-black-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
