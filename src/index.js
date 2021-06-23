import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

