const BASE_URL = 'http://localhost:8000';

const API_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/api/buyer/login`,
    REGISTER: `${BASE_URL}/auth/api/buyer/register`,
    PRODUCT: `${BASE_URL}/product/api/products`,
};

export default API_ENDPOINTS;
