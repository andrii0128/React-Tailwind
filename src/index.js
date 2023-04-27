import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Login1 from './components/auth/Login1';
import Login2 from './components/auth/Login2';
import Login3 from './components/auth/Login3';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
