import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './forms/CommentForm';
import CommentsList from './components/CommentsList';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null); // Track the comment being replied to
  const [showReplyForm, setShowReplyForm] = useState(true); // Track if the reply form should be shown

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

  const handleReply = (comment) => {
    setReplyTo(comment); // Set the comment being replied to
    setShowReplyForm(true); // Show the reply form
  };

  const handleCloseReplyForm = () => {
    setReplyTo(null); // Clear the comment being replied to
    setShowReplyForm(false); // Hide the reply form
  };

  const handlePostNewComment = () => {
    setShowReplyForm(true); // Show the comment form for posting a new comment
  };

  return (
    <div className="App">
      <h1>Research Hub</h1>
      {showReplyForm && !replyTo && (
        <CommentForm fetchComments={fetchComments} onClose={handleCloseReplyForm} />
      )}
      {showReplyForm && replyTo && (
        <CommentForm fetchComments={fetchComments} parentId={replyTo._id} onClose={handleCloseReplyForm} />
      )}
      <CommentsList comments={comments} onReply={handleReply} />
    </div>
  );
};

export default App;
