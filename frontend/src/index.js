import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './landing_page/Home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/login_page';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import Pricing from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';
import NewHome from './landing_page/NewHome';
// import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <CookiesProvider> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/About' element={<AboutPage />}></Route>
        <Route path='/Products' element={<ProductsPage />}></Route>
        <Route path='/Pricing' element={<Pricing />}></Route>
        <Route path='/Support' element={<SupportPage />}></Route>
        <Route path='/NewHome' element={<NewHome />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    {/* </CookiesProvider> */}
  </BrowserRouter>
);


