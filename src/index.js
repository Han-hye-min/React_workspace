import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './pages/Table';
import Event01 from './pages/Event01';
import StatePage from './pages/StatePage';
import StatePage3 from './pages/StatePage3';
import StatePage2 from './pages/StatePage2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StatePage3 />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
