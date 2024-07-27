import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './TopBanner.scss';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TopBanner: React.FC = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleDropdownClose = () => {
      setIsDropdownOpen(false);
    };

    return (
        <div className="top-banner border-1 container-fill">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="info d-flex">
                    <span className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        Email: info@example.com
                    </span>
                    <span className="ms-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                        Location: 123 Main St, City, Country
                    </span>
                </div>

                <div className="d-flex align-items-center position-relative">
                    <div
                        className="dropdown me-3"
                        onMouseEnter={handleDropdownToggle}
                        onMouseLeave={handleDropdownClose}
                    >
                        <button
                            className="btn btn dropdown-toggle"
                            type="button"
                            id="languageDropdown"
                            aria-expanded={isDropdownOpen ? 'true' : 'false'}
                        >
                        English
                        </button>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="languageDropdown">
                            <li><a className="dropdown-item" href="#!">Swahili</a></li>
                            {/* <li><a className="dropdown-item" href="#!">Swahili</a></li> */}
                        </ul>
                    </div>
                    <div className="social-icons d-flex">
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="ms-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="ms-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
    };

export default TopBanner;