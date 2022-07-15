import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HidePlaylistBox,
  ShowPlaylistBox,
} from "./style/styled_component/video_play";

import Index from "./pages/index";
import VideoPlay from "./pages/video_play";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/video_play"
          element={
            <ShowPlaylistBox>
              <HidePlaylistBox>
                <VideoPlay />
              </HidePlaylistBox>
            </ShowPlaylistBox>
          }
        />

        <Route path="/test" element={<Test/>}/>
        <Route path="/test2" element={<Test2/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;