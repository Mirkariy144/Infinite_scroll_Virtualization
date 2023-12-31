import { Route, Routes } from 'react-router-dom';
import { Posts, Post } from '../pages';
import React from 'react';

function AppEntry() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
    </div>
  );
}

export default AppEntry;
