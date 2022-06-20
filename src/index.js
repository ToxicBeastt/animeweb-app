import ReactDOM from 'react-dom/client';
import React from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >,
  document.getElementById('root')
);
reportWebVitals();