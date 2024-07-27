import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SingleProduct.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    src: string;
}

const SingleProduct: React.FC = () => {
    const location = useLocation();
    const product = location.state?.product as Product;

    // Initialize mainImage with a default value (empty string) or the first image if available
    // const [mainImage, setMainImage] = useState(product?.images[0] || '');

    // Render a fallback if product is not found
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details-container">
            <div className="product-images">
                <div className="main-image">
                    <img src={product.src} alt={product.title} />
                </div>
                <div className="thumbnails">
                    <img
                        // key={index}
                        src={product.src}
                        alt={`${product.title} thumbnail `}
                        // onClick={() => setMainImage(image)}
                        // className={mainImage === image ? 'active' : ''}
                    />
                </div>
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;
