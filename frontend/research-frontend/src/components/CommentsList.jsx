import React from 'react';

const CommentsList = ({ comments, onReply }) => {
    return (
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={comment._id} className="comment" style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
            <h3>{comment.username}</h3>
            <p>{comment.comment}</p>
            <small>{new Date(comment.date).toLocaleString()}</small>
            <button onClick={() => onReply(comment)}>Reply</button> {/* Add this line */}
          </div>
        ))}
      </div>
    );
  };
  

export default CommentsList;
