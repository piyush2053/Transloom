import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import Translate from './pages/Translate/Translate.tsx';
import { LanguageProvider } from './LanguageProvider.tsx';
import ErrorPage from './pages/Error/Error.tsx';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);