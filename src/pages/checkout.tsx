import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, decreaseQuantity, removeFromCart } from '../store/cartSlice';
import Layout from '../modules/core/Partials/Layout';
import BreadcrumbCom from '../modules/core/BreadCrumb/BreadCrumb';
import '../assets/css/global.css';
import '../assets/css/checkout.css';
import { useAppDispatch } from '../store/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { showToast } from '../modules/core/Helpers/ToastNotification';

const Checkout: React.FC = () => {
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
        <Layout childrenClasses={undefined}>
            <BreadcrumbCom
                paths={[
                    { name: 'Home', path: '/' },
                    { name: 'Checkout', path: '/checkout' },
                ]}
            />
            <div className="container checkout-body">
                <h2 className="my-4">Checkout</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="checkout-header bg-lightgray py-2 px-3 mb-3">
                            <div className="row">
                                <div className="col-md-2 text-center"><strong>Image</strong></div>
                                <div className="col-md-2 text-center"><strong>Product</strong></div>
                                <div className="col-md-2 text-center"><strong>Unit Price</strong></div>
                                <div className="col-md-2 text-center"><strong>Quantity</strong></div>
                                <div className="col-md-2 text-center"><strong>Total</strong></div>
                                <div className="col-md-2 text-center"><strong>Remove</strong></div>
                            </div>
                        </div>
                        {cart.items.map(item => (
                            <div key={item.id} className="row mb-3 align-items-center">
                                <div className="col-md-2 text-center">
                                    <img src={item.product.src} alt={item.product.alt} className="img-fluid" />
                                </div>
                                <div className="col-md-2 text-center">
                                    <p>{item.product.title}</p>
                                </div>
                                <div className="col-md-2 text-center">
                                    <p>${item.product.price.toFixed(2)}</p>
                                </div>
                                <div className="col-md-2 text-center">
                                    <div className="input-group quantity-control justify-content-center">
                                        <button className="btn btn-outline-secondary" onClick={() => handleDecreaseQuantity(item.product.id)}>-</button>
                                        <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                        <button className="btn btn-outline-secondary" onClick={() => handleIncreaseQuantity(item.product.id)}>+</button>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <div className="col-md-2 text-center">
                                    <button className="btn btn-danger" onClick={() => handleRemoveItem(item.product.id)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="cart-summary  px-3 mx-4">
                            <h4>Cart Summary</h4>
                            <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
                            <button onClick={handleOrder} className="btn btn-success w-100">Submit Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
