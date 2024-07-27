import { useAppDispatch } from "../../../store/hooks";
import { useSelector } from 'react-redux';
import { RootState } from "../../../store/store";
import { Button } from "react-bootstrap";
import { addToCart, decreaseQuantity } from '../../../store/cartSlice';

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

const QuantitySelector: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useAppDispatch();
    const cartItem = useSelector((state: RootState) => state.cart.items.find(item => item.product.id === product.id));

    const handleIncreaseQuantity = () => {
        dispatch(addToCart(product));
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(product.id));
    };

    return (
        <div className="d-flex align-items-center">
            <Button variant="secondary" onClick={handleDecreaseQuantity} disabled={cartItem?.quantity === 1}>-</Button>
            <span className="mx-2">{cartItem?.quantity}</span>
            <Button variant="secondary" onClick={handleIncreaseQuantity}>+</Button>
        </div>
    );
};


export default QuantitySelector;