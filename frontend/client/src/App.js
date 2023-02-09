import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from 'store';

import HomePage from 'containers/Home';
import LoginPage from 'containers/Login';
import Register from 'containers/Register';
import DashboardPage from 'containers/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
