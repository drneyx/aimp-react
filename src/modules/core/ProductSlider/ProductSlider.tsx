import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './ProductSlider.css'; // Ensure this CSS file is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { addToCart } from '../../../store/cartSlice';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import QuantitySelector from '../cart/QuantitySelector';
import Star from '../Helpers/icons/Star';
import { showToast } from '../Helpers/ToastNotification';
import ProductCard from './ProductCard';
import { Product } from './types';
import { fetchProducts, resetProducts } from '../../../store/productSlice';


interface ProductSliderProps {
    title: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const dispatch = useAppDispatch();

    const { products, loading, hasMore, page, error } = useSelector((state: RootState) => state.product);

    const observer = useRef<IntersectionObserver | null>(null);

    const lastProductElementRef = useCallback((node: Element) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                dispatch(fetchProducts(page));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore, page, dispatch]);

    
    useEffect(() => {
        dispatch(resetProducts());
        dispatch(fetchProducts(1));
    }, [dispatch]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < products.length - 4 ? prevIndex + 1 : prevIndex
        );
    };

    const cartItemCount = useSelector((state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        setSelectedProduct(product);
        showToast('Product added successfully!');
    };


    const handleCloseModal = () => setShowModal(false);

    return (
        <div
            className="product-slider py-3"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Container className="bg-white py-4">
                <Row>
                    <Col>
                        <div className="text-start mb-4">
                            <h1 className="font-weight-bold">{title}</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between align-items-center position-relative">
                    {hover && (
                        <Button
                            variant="success"
                            className="slider-button-left"
                            onClick={handlePrevClick}
                            disabled={currentIndex === 0}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                    )}
                    {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                            <ProductCard product={product} handleAddToCart={handleAddToCart} />
                        </Col>
                    ))}
                    {hover && (
                        <Button
                            variant="success"
                            className="slider-button-right"
                            onClick={handleNextClick}
                            disabled={currentIndex >= products.length - 4}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductSlider;