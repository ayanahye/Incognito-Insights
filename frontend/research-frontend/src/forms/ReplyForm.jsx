import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ fetchReplies, parentId }) => {
  const [username, setUsername] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/comment/${parentId}/replies`, { username, reply });
      fetchReplies();
      setUsername('');
      setReply('');
    } catch (error) {
      console.error('There was an error submitting the reply:', error);
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <div contentEditable="true" id="comment-expand" className="comment-input" placeholder="Your comment" onInput={(e) => setReply(e.target.innerHTML)}></div>
      <div>
        <button type="button" onClick={handleBoldClick}><strong>B</strong></button>
        <button type="button" onClick={handleItalicClick}><em>I</em></button>
        <button type="button" onClick={handleUnderlineClick}><u>U</u></button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReplyForm;
