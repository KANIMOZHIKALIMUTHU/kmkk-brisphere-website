import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderFormPage from './components/OrderFormPage'; // New page to render OrderForm
import './index.css'; // Main styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-form" element={<OrderFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
