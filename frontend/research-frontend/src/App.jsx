import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import CommentPage from './pages/CommentPage';
import ReplyPage from './pages/ReplyPage'; 
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<CommentPage />} />
          <Route path="/reply/:id" element={<ReplyPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
