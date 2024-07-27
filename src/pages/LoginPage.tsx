import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../assets/css/auth.css';
import { useAppDispatch } from '../store/hooks';
import Footer from '../modules/core/Footer/Footer';
import TopBanner from '../modules/core/topbanner/TopBanner';
import SecondBanner from '../modules/core/SecondBanner/SecondBanner';
import MenuBanner from '../modules/core/MenuBanner/MenuBanner';
import Layout from '../modules/core/Partials/Layout';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginAsync({ username, password }))
        .unwrap()
        .then(() => {
            navigate('/welcome');
          })
    };

    console.log('ERRORS');
    console.log(error)

    const handleGoogleSuccess = (response: any) => {
        const token = response.credential;
        // Dispatch a Google login action (to be implemented)
        console.log('Google login success:', token);
    };

    const handleGoogleError = () => {
        console.log('Google login failed');
    };


    return (
        <>
            <Layout childrenClasses={undefined}>
                <div className="d-flex justify-content-center align-items-center login">
                    <div className="form-container-login">
                        <h2 className="mb-4 text-center">WELLCOME</h2>
                        {error && (
                            <div className='mt-2 text-center' style={{ color: 'red' }}>
                                {error.error || 'An error occurred during login'}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    placeholder=""
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-custom w-100">
                                {loading ? 'Logging in...' : 'Login'}
                            </button>


                        </form>
                        <div className="mt-3">
                            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleError}
                                    containerProps={{
                                        className: 'google-login-button',
                                    }}
                                />
                            </GoogleOAuthProvider>
                        </div>
                        <p className="mt-3">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Login;
