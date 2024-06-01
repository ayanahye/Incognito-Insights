
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentForm from '../forms/CommentForm';

const ReplyPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchCommentAndReplies = async () => {
      try {
        const commentRes = await axios.get(`http://localhost:5000/api/comment/${id}`);
        setComment(commentRes.data);
        console.log("F u");
        const repliesRes = await axios.get(`http://localhost:5000/api/comment/${id}/replies`);
        console.log("please");
        console.log(repliesRes.data);
        setReplies(repliesRes.data);
      } catch (error) {
        console.error('There was an error fetching the comment and replies:', error);
      }
    };

    fetchCommentAndReplies();
  }, [id]);

  console.log(replies);

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
      <div className='replies-container'>
        <h2>Replies</h2>
        {replies.map(reply => (
          <div key={reply._id} className='reply'>
            <h3>{reply.username}</h3>
            <p>{reply.comment}</p>
            <small>{new Date(reply.date).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReplyPage;
