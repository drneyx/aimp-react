import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import './index.css'
import ProductDetails from './pages/ProductDetails';
import Login from './pages/LoginPage';
import Register from './pages/SignupPage';
import Welcome from './modules/core/wellcome/wellcome';
import NewsUpdates from './pages/NewsUpdates';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/checkout';
import SearchResultsPage from './pages/SearchResults';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/news-updates" element={<NewsUpdates />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search-results" element={<SearchResultsPage />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
        </HelmetProvider>
    );
};

export default App;
