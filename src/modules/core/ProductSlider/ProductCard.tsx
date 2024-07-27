// ProductCard.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from './types';

interface ProductCardProps {
    product: Product;
    handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart }) => {
    return (
        <div className="product-card border d-flex flex-column align-items-center">
            <Link to={`/product/${product.id}`} state={{ product }} className="d-block mb-1">
                <img
                    src={product.image_cdn}
                    alt={product.name}
                    className="img-fluid"
                    loading="lazy"
                    width="1024"
                    height="1024"
                />
            </Link>
            <div className="product-info mx-2 text-center">
                <a href="#" className="text-decoration-none text-dark text-radh text-start">
                    <FontAwesomeIcon icon={faUser} className="text-darkgreen me-1" /> by: {product.seller}
                </a>
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <h5 className="fw-bold my-3">
                    <a href={product.slug} className="text-decoration-none">
                        {product.name}
                    </a>
                </h5>
                <div className="d-flex gap-2 align-items-center mb-3 mt-1">
                    <span className="product-original-price mt-2">$9.99</span>
                    <span className="product-discount-price">{product.price}</span>
                </div>
                <p className="mb-1">{product.region}, {product.district}</p>
            </div>
            <Button
                variant="success"
                className="my-3 darkgreen-bg"
                onClick={() => handleAddToCart(product)}
            >
                Place Order
            </Button>
        </div>
    );
};

export default ProductCard;
