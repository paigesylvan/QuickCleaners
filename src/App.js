import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/HomeContent.js'



//import DistinctiveCare from './styles/DistinctiveCare.png'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home"element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

