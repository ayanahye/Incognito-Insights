import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ fetchComments }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/comments', { username, comment });
      fetchComments();
      setUsername('');
      setComment('');
    } catch (error) {
      console.error('There was an error submitting the comment:', error);
    }
  };

  const handleBoldClick = () => {
    document.execCommand('bold', false, '');
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, '');
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline', false, '');
  };

  return (
    <form onSubmit={handleSubmit} className='form1'>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <div contentEditable="true" id="comment-expand" className="comment-input" placeholder="Your comment" onInput={(e) => setComment(e.target.innerHTML)}></div>
      <div>
        <button type="button" onClick={handleBoldClick}><strong>B</strong></button>
        <button type="button" onClick={handleItalicClick}><em>I</em></button>
        <button type="button" onClick={handleUnderlineClick}><u>U</u></button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
