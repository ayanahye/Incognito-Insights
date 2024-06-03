
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentForm from '../forms/CommentForm';
import ReplyForm from '../forms/ReplyForm';

const ReplyPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [replies, setReplies] = useState([]);

  const fetchCommentAndReplies = async () => {
    try {
      const commentRes = await axios.get(`http://localhost:5000/api/comment/${id}`);
      setComment(commentRes.data);
      const repliesRes = await axios.get(`http://localhost:5000/api/comment/${id}/replies`);
      setReplies(repliesRes.data);
    } catch (error) {
      console.error('There was an error fetching the comment and replies:', error);
    }
  };

  useEffect(() => {
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
        <ReplyForm fetchReplies={fetchCommentAndReplies} parentId={comment?._id} />
      </div>
      <h2>Replies</h2>
      <div className='comments'>
        {replies.map((reply, index) => (
            <div
              key={reply._id}
              className={`comment ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <h3>{reply.username}</h3>
              <p>{reply.reply}</p>
              <small>{new Date(reply.date).toLocaleString()}</small>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReplyPage;
