import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} className="toast-container" />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
