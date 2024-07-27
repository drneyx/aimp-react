import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../modules/core/ProductSlider/types';

interface CartItem {
    id: number;
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const LOCAL_STORAGE_KEY = 'cart';

const loadState = (): CartState => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedState === null) {
            return { items: [] };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Failed to load cart state:', err);
        return { items: [] };
    }
};

const saveState = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (err) {
        console.error('Failed to save cart state:', err);
    }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ id: Date.now(), product: action.payload, quantity: 1 });
            }
            saveState(state);
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find(item => item.product.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                state.items = state.items.filter(item => item.product.id !== action.payload);
            }
            saveState(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.product.id !== action.payload);
            saveState(state);
        },
    },
});

export const { addToCart, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
