import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Blog from './routes/Blog';
import Pagination from './components/Pagination';
import Products from './routes/Products';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Blog/> */}
    <App />
    {/* <Home/> */}
    {/* <Shop/> */}
    {/* <Pagination/> */}
    {/* <Products /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

