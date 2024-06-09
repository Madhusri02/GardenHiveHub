// PostPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Navbar from './Navbar';

const PostPage = () => {
  <Navbar />
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
      hello
        {/* {posts.map(post => ( */}
          <div key={post.id} className="border rounded-lg border-gray-200 shadow-md p-4">
            <div className="flex justify-center">
              <img src={post.photo} alt={post.title} className="w-32 h-32 object-cover" />
            </div>
            <h2 className="mt-4 text-lg font-bold">{post.title}</h2>
            <p className="mt-2 text-sm">{post.description.substring(0, 50)}...</p>
            <div className="mt-4 flex justify-end">
              <button className="text-blue-500">Read More</button>
            </div>
          </div>
        {/* // ))} */}
      </div>
    </div>
  );
};

export default PostPage;
