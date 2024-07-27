import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_ENDPOINTS from '../apiConstants';

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    loading: boolean;
    error: any | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

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
    async (credentials: { username: string; password: string }) => {
        const response = await axios.post(API_ENDPOINTS.LOGIN, credentials);
        return response.data;
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
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(registerAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerAsync.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
