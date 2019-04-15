import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './app.scss';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

const App = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <AppNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductDetail} />
      </React.Fragment>
    </Router>
  </React.Fragment>
);

export default App;
