import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Login1 from './components/auth/Login1';
import Login2 from './components/auth/Login2';
import Login3 from './components/auth/Login3';

import Accordion1 from './components/accordion/Accordion1';
import Accordion2 from './components/accordion/Accordion2';
import Accordion3 from './components/accordion/Accordion3';

import Tab1 from './components/tabs/Tab1';
import Tab2 from './components/tabs/Tab2';
import Tab3 from './components/tabs/Tab3';
import Tab4 from './components/tabs/Tab4';

import Toggle1 from './components/toggle/Toggle1';
import Toggle2 from './components/toggle/Toggle2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
