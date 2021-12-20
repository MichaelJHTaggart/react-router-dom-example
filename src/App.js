import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
     
    <Header />

    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="layout" element={<Layout />} />
    </Routes>


    <Footer />

    </div>
  );
}

export default App;
