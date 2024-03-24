import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import VideoEditor from './Components/VideoEditor/VideoEditor';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/VideoEditor" element={<VideoEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

