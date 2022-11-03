import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Appl from './Appl';
import Holidays from './Holidays';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Appl/>}></Route>
      <Route path='/holidays' element={<Holidays/>}></Route>
      </Routes>
      </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
