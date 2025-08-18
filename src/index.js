import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Auth/Login.js';
import Signup from './Auth/Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './Home.js';
import ForgotPassword from './Auth/ForgotPassword.js';
import HomePage from './HomePage/Home.js';
import List from './Courses/List.js';
import ProductsList from './Products/Products.js';
import ProfileUpdate from './Profile/ProfileUpdate.js';
import Products from './ReadData/Products.js';
import UsersList from './Users/UsersList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/list' Component={List} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/forgot-password' Component={ForgotPassword} />
        <Route path='/products-list' Component={ProductsList} />
        <Route path='/profile-update' Component={ProfileUpdate}/>
        <Route path='/api-practice' Component={Products}/>
        <Route path='/users' Component={UsersList}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
