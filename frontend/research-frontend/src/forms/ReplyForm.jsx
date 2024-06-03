import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ fetchReplies, parentId }) => {
  const [username, setUsername] = useState('');
  const [reply, setReply] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/comment/${parentId}/replies`, { username, reply });
      fetchReplies();
      setUsername('');
      setReply('');
      setWordCount(0);
    } catch (error) {
      console.error('There was an error submitting the reply:', error);
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/); 
    setWordCount(words.length);
    if (words.length > 500) {
      setReply(words.slice(0, 500).join(' '));
    } else {
      setReply(inputText);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
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
    <form onSubmit={handleSubmit} className='form2'>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <textarea
        placeholder="Your comment"
        id="comment-expand" className="comment-input"
        value={reply}
        onChange={handleInputChange}
        onPaste={handlePaste}
        required
      />
      <div>Words: {wordCount}/500</div>
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
