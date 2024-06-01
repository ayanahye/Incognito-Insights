import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import CommentPage from './pages/CommentPage'; // Import the CommentPage component
import ReplyPage from './pages/ReplyPage'; // Import the ReplyPage component
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<CommentPage />} />
      <Route path="reply/:id" element={<ReplyPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
