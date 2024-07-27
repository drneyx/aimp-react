import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBox.css';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleInputClick = () => {
        setShowSuggestions(true);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.search-container')) {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const suggestions = [
        {
            name: 'Distillerie Saint-Hilaire',
            vendor: 'Saint-Hilaire',
            location: 'France',
            price: '€20.00',
            discount: '€25.00',
            image: 'https://rntest1.myshopify.com/cdn/shop/products/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_1024x1024.png?v=1651222976'
        },
        {
            name: 'Aromaplantes',
            vendor: 'Aroma',
            location: 'France',
            price: '€15.00',
            discount: '€18.00',
            image: 'https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534'
        },
        {
            name: 'La ferme du Hitton',
            vendor: 'Hitton',
            location: 'France',
            price: '€30.00',
            discount: '€35.00',
            image: 'https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534'
        },
        {
            name: 'Théophile Berthon 1867',
            vendor: 'Théophile',
            location: 'France',
            price: '€25.00',
            discount: '€30.00',
            image: 'https://rntest1.myshopify.com/cdn/shop/products/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_1024x1024.png?v=1651222976'
        }
    ];

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-container position-relative">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onClick={handleInputClick}
                placeholder="Search..."
                className="form-control"
            />
            {showSuggestions && (
                <div aria-label="Search results" className="search-results p-3">
                    <div className="row p-4">
                        {(filteredSuggestions.length ? filteredSuggestions : suggestions).slice(0, 6).map((suggestion, index) => (
                            <div key={index} className="col-md-4 p-2  mb-3">
                                <a href={`/${suggestion.name.toLowerCase().replace(/ /g, '-')}`} className="text-decoration-none d-flex suggestion-item">
                                    <div className="product-image me-3">
                                        <img
                                            src={suggestion.image}
                                            alt={`${suggestion.name} logo`}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="product-details d-flex flex-column justify-content-between">
                                        <h5 className="product-title mb-1 text-dark">{suggestion.name}</h5>
                                        <p className="product-vendor mb-1 text-muted">{suggestion.vendor}</p>
                                        <p className="product-location mb-1 text-muted">{suggestion.location}</p>
                                        <p className="product-price mb-0">
                                            <span className="discount-price me-2 text-muted text-decoration-line-through">{suggestion.discount}</span>
                                            <span className="current-price text-danger fw-bold">{suggestion.price}</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
