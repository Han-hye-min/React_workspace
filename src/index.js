import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Multinput from './pages/Multinput';
import UseEffectExam01 from './pages/hook/UseEffectExam01';
import TimerPage from './pages/hook/TimerPage';
import TimerMainPage from './pages/hook/TimerMainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TimerMainPage />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
