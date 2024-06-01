import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from '../forms/CommentForm'; // Import your CommentForm component

const ReplyPage = ({ match }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comment/${match.params.id}`);
        setComment(res.data);
      } catch (error) {
        console.error('There was an error fetching the comment:', error);
      }
    };

    fetchComment();
  }, [match.params.id]);

  const handleReply = async (reply) => {
    // Implement logic to post a reply to the comment
    console.log('Replying to:', reply);
  };

  return (
    <div>
      {comment && (
        <div className="comment">
          <h3>{comment.username}</h3>
          <p>{comment.comment}</p>
          <small>{new Date(comment.date).toLocaleString()}</small>
        </div>
      )}
      <CommentForm fetchComments={() => {}} parentId={comment?._id} /> {/* Pass parentId to CommentForm for replying */}
    </div>
  );
};

export default ReplyPage;
