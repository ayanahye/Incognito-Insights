import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import CommentForm from '../forms/CommentForm';

const ReplyPage = () => {
  const { id } = useParams(); 
  
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comment/${id}`);
        setComment(res.data);
      } catch (error) {
        console.error('There was an error fetching the comment:', error);
      }
    };

    fetchComment();
  }, [id]);

  const handleReply = async (reply) => {

    console.log('Replying to:', reply);
  };

  return (
    <div className='inner'>
      <h1 className='title'>Reply</h1>
      <div className='comment-container'>
        {comment && (
          <div className="" id="comment2">
            <h3>{comment.username}</h3>
            <p>{comment.comment}</p>
            <small>{new Date(comment.date).toLocaleString()}</small>
          </div>
        )}
      </div>
      <div className='reply-comment'>
        <CommentForm fetchComments={() => {}} parentId={comment?._id} />
      </div>
    </div>
  );
};

export default ReplyPage;
