import React from 'react';
import './app.scss';
import AppNavbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <React.Fragment>
    <AppNavbar />
    <Home />
  </React.Fragment>
);

export default App;
