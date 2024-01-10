import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Views/Layouts/Layout';
import HomePage from './Views/HomePage';
import AboutPage from './Views/AboutPage';
import ProductsPage from './Views/ProductsPage';
import ProfilePage from './Views/ProfilePage';
import LoginPage from './Views/Auth/Login';

import useToken from './hooks/useToken';

function App() {
  const { token, setToken } = useToken(); /* eslint-disable-line */

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* <ProtectedRoute path="/profile" component={<ProfilePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
