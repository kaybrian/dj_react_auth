import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from 'containers/Home';
import LoginPage from 'containers/Login';
import Register from 'containers/Register';
import DashboardPage from 'containers/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
