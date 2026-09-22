import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './landing_page/Home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import Product from './landing_page/products/Hero';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Products' element={<Product />}></Route>
      <Route path='/Pricing' element={<Pricing />}></Route>
      <Route path='/Support' element={<Support />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);


