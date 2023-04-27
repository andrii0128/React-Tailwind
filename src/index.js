import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Login1 from './components/Login/Login1';
import Login2 from './components/Login/Login2';
import Login3 from './components/Login/Login3';

import Accordion1 from './components/accordion/Accordion1';
import Accordion2 from './components/accordion/Accordion2';
import Accordion3 from './components/accordion/Accordion3';

import Tab1 from './components/tabs/Tab1';
import Tab2 from './components/tabs/Tab2';
import Tab3 from './components/tabs/Tab3';
import Tab4 from './components/tabs/Tab4';

import Toggle1 from './components/toggle/Toggle1';
import Toggle2 from './components/toggle/Toggle2';

import Sidebar1 from './components/sidebar/Sidebar1';
import Sidebar2 from './components/sidebar/Sidebar2';
import Sidebar3 from './components/sidebar/Sidebar3';
import Sidebar4 from './components/sidebar/Sidebar4';

import Navbar1 from './components/navbar/Navbar1';
import Navbar2 from './components/navbar/Navbar2';

import Modal1 from './components/dialog/Modal1';
import Modal3 from './components/dialog/Modal3';

import Registration1 from './components/registration/Registration1';
import Registration2 from './components/registration/Registration2';

import Table1 from './components/table/Table1';
import Table2 from './components/table/Table2';

import Gallery1 from './components/responsive_gallery/Gallery1';
import Gallery2 from './components/responsive_gallery/Gallery2';
import Gallery3 from './components/responsive_gallery/Gallery3';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Gallery2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
