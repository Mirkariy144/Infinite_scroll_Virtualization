import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { PostsListPage } from '../pages/Posts';
import { PostPage } from '../pages/Post';

function AppEntry() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsListPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default AppEntry;
