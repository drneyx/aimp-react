import React, { useState } from 'react';
import './CartBox.css'; // Assuming you will add the corresponding CSS
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addToCart, decreaseQuantity, removeFromCart } from '../../../store/cartSlice';
import { useAppDispatch } from '../../../store/hooks';
import { showToast } from '../Helpers/ToastNotification';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
;

const CartBox = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const handleOrder = () => {
        showToast('Order placed successfully!');
    };

    const handleIncreaseQuantity = (productId: number) => {
        const product = cart.items.find(item => item.product.id === productId)?.product;
        if (product) {
            dispatch(addToCart(product));
        }
    };

    const handleDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity(productId));
    };

    const handleRemoveItem = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const calculateTotalPrice = () => {
        return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div className="cart-container card p-3">
            <h4 className="mb-3">Your Cart</h4>
            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <><ul className="list-group">
                    {cart.items.map((item) => (
                        <li key={item.id} className="list-group-item d-flex align-items-center">
                            <img
                                src={item.product.image_cdn}
                                alt={item.product.name}
                                className="cart-item-image me-3" />
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column">
                                    <h5 className="mb-1">{item.product.name}</h5>
                                    <p className="mb-1">{item.product.price}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-outline-secondary btn-sm me-2"
                                        onClick={() => handleDecreaseQuantity(item.product.id)}
                                    >
                                        -
                                    </button>
                                    <span className="me-2">{item.quantity}</span>
                                    <button
                                        className="btn btn-outline-secondary btn-sm me-2"
                                        onClick={() => handleIncreaseQuantity(item.product.id)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleRemoveItem(item.product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                    <Link to="/checkout" className="continue-checkout-button d-flex align-items-center justify-content-center">
                        <span>Continue to Checkout</span>
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Link></>
            )}
        </div>
    );
};

export default CartBox;
