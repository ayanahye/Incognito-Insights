import React from 'react';
import { useParams } from 'react-router-dom';

const CommentPage = ({ comments }) => {
  const { id } = useParams();
  const comment = comments.find((c) => c._id === id);

  return (
    <div className="comment-page">
      <div>
        <h3>{comment.username}</h3>
        <p>{comment.comment}</p>
        <small>{new Date(comment.date).toLocaleString()}</small>
      </div>
      <div className="replies">
        {comment.replies.map((reply) => (
          <div key={reply._id} className="reply">
            <h3>{reply.username}</h3>
            <p>{reply.comment}</p>
            <small>{new Date(reply.date).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentPage;
