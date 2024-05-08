import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/HomeContent.js'
import Customers from './pages/Customers.js'
import Services from './pages/Services.js'


//import DistinctiveCare from './styles/DistinctiveCare.png'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home"element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="services" element={<Services />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

