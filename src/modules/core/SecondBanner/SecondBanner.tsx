import React, { useState } from 'react';
import './SecondBanner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import SearchBox from '../SearchBox/SearchBox';
import Logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartBox from '../CartBox/CartBox';

const SecondBanner: React.FC = () => {
    const cartItemCount = useSelector((state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
        setIsCartVisible((prev) => !prev);
    };

    return (
        <div className="second-banner bg-white">
            <div className="container">
                <div className="row align-items-center py-3">
                    <div className="col-md-2">
                        <div className="logo-wrapper d-flex align-items-center">
                            <img
                                // srcSet="//rntest1.myshopify.com/cdn/shop/files/logo_150x.png?v=1651225317 1x, //rntest1.myshopify.com/cdn/shop/files/logo_150x@2x.png?v=1651225317 2x"
                                src={Logo}
                                loading="lazy"
                                alt="AIMP"
                                className='logo-image'
                            />
                        </div>
                    </div>
                    <div className="col-md-8 d-none d-lg-block">
                        <div className="header-contact-search d-flex align-items-center">
                            {/* <div className="header-feature-item d-flex align-items-center me-3">
                            <div className="header-feature-icon">
                                 <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            </div>
                            <div className="header-feature-info">
                                <h6>Get Support</h6>
                                <p>123-456-789-10</p>
                            </div>
                        </div> */}
                            <div className="header-search">
                                <SearchBox />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="header-options d-flex justify-content-end align-items-center">
                            <div className="user-menu me-3">
                                <Link to="/login" className="header-icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </div>
                            <div className="mini-cart-icon">
                                <Link onClick={toggleCart} className="header-icon d-flex align-items-center" to="#">
                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                    {cartItemCount > 0 && (
                                        <span className="cart-counter position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            {cartItemCount}
                                        </span>
                                    )}
                                </Link>
                                {isCartVisible && <CartBox />}
                            </div>
                        
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;
