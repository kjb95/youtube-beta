import React from 'react';
import './App.css';
import Index from './components/index';
import VideoPlay from './components/video_play';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/video_play' element={<VideoPlay />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
