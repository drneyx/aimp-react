// features/products/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../modules/core/ProductSlider/types';
import API_ENDPOINTS from '../apiConstants';

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
    page: number;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    hasMore: true,
    page: 1,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_ENDPOINTS.PRODUCT}?page=${page}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProducts(state) {
            state.products = [];
            state.page = 1;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = [...state.products, ...action.payload.data];
                state.hasMore = action.payload.next !== null;
                state.page += 1;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetProducts } = productSlice.actions;

export default productSlice.reducer;
