import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_ENDPOINTS from '../apiConstants';

interface User {
    id: number;
    username: string;
    email: string;
    phone_number: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: any | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};


const loadStateFromLocalStorage = (): AuthState => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
        return {
            isAuthenticated: true,
            user: JSON.parse(user),
            loading: false,
            error: null,
        };
    }
    return initialState;
};

const persistedState = loadStateFromLocalStorage();

interface RegistrationData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_ENDPOINTS.LOGIN, credentials);
            const { token, user } = response.data;

            // Save token and user data to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            return response.data;
        } catch (err: any) {
            if (axios.isAxiosError(err) && err.response) {
                return rejectWithValue(err.response.data);
            }
            return rejectWithValue(err.message);
        }
    }
);
export const registerAsync = createAsyncThunk(
    'auth/register',
    async (data: RegistrationData, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_ENDPOINTS.REGISTER, data);
            return response.data;
        } catch (err: any) {

            if (axios.isAxiosError(err) && err.response) {
                return rejectWithValue(err.response.data);
            }
            return rejectWithValue(err.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: persistedState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerAsync.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;