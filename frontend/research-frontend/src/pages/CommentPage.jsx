import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsList from '../components/CommentsList'; // Import your CommentsList component
import CommentForm from '../forms/CommentForm'; // Import your CommentForm component

const HomePage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/comments');
      setComments(res.data);
    } catch (error) {
      console.error('There was an error fetching the comments:', error);
    }
  };

  const handlePostNewComment = async () => {
    // Logic to post a new comment
    console.log('Posting new comment...');
    fetchComments(); // Refresh comments after posting
  };

  const handleReply = async (comment) => {
    // Implement logic to handle replying to a comment
    console.log('Replying to:', comment);
  };

  return (
    <div className='inner'>
      <h1 className='title'>Research Hub</h1>
      <div className='inner-form'>
        <CommentForm fetchComments={fetchComments} />
        <CommentsList comments={comments} onReply={handleReply} />
      </div>
    </div>
  );
};

export default HomePage;
