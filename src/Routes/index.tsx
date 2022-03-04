import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Users from '../Pages/Users';

export function MyRoutes() {
  return (
    <Routes>
      <Route caseSensitive path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
