import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* eslint-disable */
// import bootstrap css minified version
import 'bootstrap/dist/css/bootstrap.min.css';

// import bootstrap js minified version
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import jquery to use bs js components
import $ from 'jquery';

// import jquery to use bs js components
import Popper from 'popper.js';

import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/Quote';
import NavBar from './components/NavBar';
import NoMatch from './pages/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/qoute" element={<QuotePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
