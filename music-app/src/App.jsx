import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Body from './components/Body';
import Playlist from './components/Playlist';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};



export default App;