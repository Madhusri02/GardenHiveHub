import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const DetailedPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8002/get-post/${id}`);
        setPost(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:8002/update-post/${id}`, { comment: comment });
      const updatedPost = response.data;
      setComments(updatedPost.comments);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 mt-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex">
            <div className="w-1/2 pr-4">
              <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
              <div className="text-sm text-gray-600 mb-4">User: {post.username || 'Anonymous'}</div>
              <img className="w-full h-auto object-cover rounded-lg mb-6" src={post.image} alt={post.title} />
            </div>
            <div className="w-1/2 pl-4">
              <p className="text-gray-700 mb-6">{post.description}</p>
              <div className="text-gray-700">
                <span className="font-semibold">Likes: </span>{post.likes || 0}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
              <textarea
                rows="3"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add your comment..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
            
                <div  className="mb-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800">{comment.comment}</p>
                  <div className="text-sm text-gray-600 mt-2">By: {comment.username || 'Anonymous'}</div>
                </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedPost;
