import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import Translate from './pages/Translate/Translate.tsx';
import { LanguageProvider } from './LanguageProvider.tsx';


ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
