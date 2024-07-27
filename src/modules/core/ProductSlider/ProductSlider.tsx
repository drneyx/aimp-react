import React, { useState } from 'react';
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

const products = [
    {
        id: 1,
        href: "/products/product-1",
        src: "https://rntest1.myshopify.com/cdn/shop/products/18_829b2943-5bb4-4e3e-ac28-668e33e09ee3_1024x1024.png?v=1651222764",
        alt: "Product 1",
        title: "Product 1",
        price: 29.99,
        vendor: "Hamisi Juma",
        region: "Dar es saalam",
        district: "Kinondoni",
    },
    {
        id: 2,
        href: "/products/product-2",
        src: "https://rntest1.myshopify.com/cdn/shop/products/19_e6aa13ba-07f5-4f9d-8fee-7df416a51060_1024x1024.png?v=1651222764",
        alt: "Product 2",
        title: "Product 2",
        price: 19.99,
        vendor: "Aminieli",
        region: "Kigoma",
        district: "Bochosha",
    },
    {
        id: 3,
        href: "/products/product-3",
        src: "https://rntest1.myshopify.com/cdn/shop/products/3_257e899b-cb07-44ca-b856-ef5adf0965c6_1024x1024.png?v=1651222765",
        alt: "Product 3",
        title: "Product 3",
        price: 39.99,
        vendor: "Vendor 3",
        region: "Iringa",
        district: "Makambako",
    },
    {
        id: 4,
        href: "/products/product-4",
        src: "https://rntest1.myshopify.com/cdn/shop/products/15_83639184-f403-4166-9683-1a272af0ac07_1024x1024.png?v=1653225226",
        alt: "Product 4",
        title: "Product 4",
        price: 49.99,
        vendor: "Vendor 4",
        region: "Region 4",
        district: "District 4",
    },
    {
        id: 5,
        href: "/products/product-5",
        src: "https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534",
        alt: "Product 5",
        title: "Product 5",
        price: 59.99,
        vendor: "Vendor 5",
        region: "Region 5",
        district: "District 5",
    },
    {
        id: 6,
        href: "/products/product-6",
        src: "https://rntest1.myshopify.com/cdn/shop/products/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_1024x1024.png?v=1651222976",
        alt: "Product 6",
        title: "Product 6",
        price: 69.99,
        vendor: "Vendor 6",
        region: "Region 6",
        district: "District 6",
    },
];


interface ProductSliderProps {
    title: string;
}

interface Product {
    id: number;
    src: string;
    alt: string;
    vendor: string;
    title: string;
    price: number;
    region: string;
    district: string;
    href: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < products.length - 4 ? prevIndex + 1 : prevIndex
        );
    };

    const dispatch = useAppDispatch();
    const cartItemCount = useSelector((state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        setSelectedProduct(product);
        // setShowModal(true);
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
                            <div className="product-card border d-flex flex-column align-items-center">
                                <Link to={`/product/${product.id}`} state={{ product }} className="d-block mb-1">
                                    <img
                                        src={product.src}
                                        alt={product.alt}
                                        className="img-fluid"
                                        loading="lazy"
                                        width="1024"
                                        height="1024"
                                    />
                                </Link>
                                {/* <p className="mb-1 text-radh fw-bold">{product.vendor}</p> */}

                                <div className="product-info mx-2 text-center">
                                    <a href="#" className="text-decoration-none text-dark text-radh text-start">
                                        <FontAwesomeIcon icon={faUser} className="text-darkgreen me-1" /> by: {product.vendor}
                                    </a>
                                    <div className="d-flex justify-content-center">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                    <h5 className="fw-bold my-3">
                                        <a href={product.href} className="text-decoration-none">
                                            {product.title}
                                        </a>
                                    </h5>
                                    <div className="d-flex gap-2 align-items-center mb-3 mt-1">
                                        <span className="product-original-price mt-2">$9.99</span>
                                        <span className="product-discount-price">{product.price}</span>
                                    </div>

                                    <p className="mb-1">{product.region}, {product.district}</p>
                                </div>
                                {/* <p className="mb-1"><strong>District:</strong> {product.district}</p> */}
                                <Button
                                    variant="success"
                                    className="my-3 darkgreen-bg"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Place Order
                                </Button>
                            </div>
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
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Product added to cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedProduct?.title} has been added to your cart.</p>
                    <p>Quantity: {selectedProduct && <QuantitySelector product={selectedProduct} />}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Continue Shopping</Button>
                    <Button variant="primary" onClick={() => window.location.href = '/cart'}>Go to Cart</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default ProductSlider;
