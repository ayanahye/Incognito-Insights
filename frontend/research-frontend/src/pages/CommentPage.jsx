import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsList from '../components/CommentsList'; 
import CommentForm from '../forms/CommentForm'; 
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

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

  const handleReply = async (comment) => {

    navigate(`/reply/${comment._id}`);
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
