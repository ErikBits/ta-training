import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Views/Layouts/Layout';
import HomePage from './Views/HomePage';
import AboutPage from './Views/AboutPage';
import ProductsPage from './Views/ProductsPage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ugly code, damn */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
