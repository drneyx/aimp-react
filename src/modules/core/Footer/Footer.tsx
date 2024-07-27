import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="footer-brand mb-3">
                            <a href="/">
                                {/* <img
                                    srcSet="//rntest1.myshopify.com/cdn/shop/files/logo-2_150x.png?v=1652447917 1x, //rntest1.myshopify.com/cdn/shop/files/logo-2_150x@2x.png?v=1652447917 2x"
                                    src="//rntest1.myshopify.com/cdn/shop/files/logo-2_150x.png?v=1652447917"
                                    alt="Broccoli"
                                    className="img-fluid"
                                /> */}
                            </a>
                        </div>
                        <p className="mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is dummy text of the printing.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                                <i className="icon-location mr-2"></i>
                                <span>Brooklyn, New York, United States</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className="icon-phone mr-2"></i>
                                <span>+0123-456789</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className="icon-envelope mr-2"></i>
                                <span>example@example.com</span>
                            </li>
                        </ul>
                        <ul className="list-unstyled d-flex">
                            <li className="mr-3"><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="mr-3"><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                            <li className="mr-3"><a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a></li>
                            <li className="mr-3"><a href="#" aria-label="Vimeo"><i className="fab fa-vimeo"></i></a></li>
                            <li><a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4 className="footer-title">Company</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/pages/about">About</a></li>
                            <li className="mb-2"><a href="/blogs/news">Blogs</a></li>
                            <li className="mb-2"><a href="/collections/all">All products</a></li>
                            <li className="mb-2"><a href="/pages/contact">Locations Map</a></li>
                            <li className="mb-2"><a href="/pages/faq">Faq</a></li>
                            <li className="mb-2"><a href="/pages/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4 className="footer-title">Services</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/account/order">Order</a></li>
                            <li className="mb-2"><a href="/account/login">Login</a></li>
                            <li className="mb-2"><a href="/account/register">Register</a></li>
                            <li className="mb-2"><a href="/pages/shipping">Shipping</a></li>
                            <li className="mb-2"><a href="/pages/returns">Returns</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/pages/privacy">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/pages/terms">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="/pages/support">Support</a></li>
                            <li className="mb-2"><a href="/pages/contact">Contact Us</a></li>
                            <li className="mb-2"><a href="/pages/careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/pages/contact">Contact Us</a></li>
                            <li className="mb-2"><a href="/pages/support">Support</a></li>
                            <li className="mb-2"><a href="/pages/careers">Careers</a></li>
                            <li className="mb-2"><a href="/pages/press">Press</a></li>
                            <li className="mb-2"><a href="/pages/media">Media</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
