import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { registerAsync } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import '../assets/css/auth.css';
import { useAppDispatch } from '../store/hooks';
import TopBanner from '../modules/core/topbanner/TopBanner';
import SecondBanner from '../modules/core/SecondBanner/SecondBanner';
import MenuBanner from '../modules/core/MenuBanner/MenuBanner';
import Footer from '../modules/core/Footer/Footer';
import Layout from '../modules/core/Partials/Layout';
import {
    useFormValidator,
} from '../utils/validation';
import Loader from '../modules/core/Helpers/Loader/LoaderStyleOne';

const Register: React.FC = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        first_name: '',
        last_name: '',
        phone_number: ''
    });

    const [emailError, setEmailError] = useState('');
    const { errors, validateForm, onBlurField } = useFormValidator(form);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const nextFormState = {
            ...form,
            [name]: value,
        };
        setForm(nextFormState);

        if (errors[name]?.dirty) {
            validateForm({ form: nextFormState, errors, field: name });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isFormValid = validateForm({ form, errors });
        if (!isFormValid) return;
        if (form.password !== form.password2) {
            // Handle password mismatch error
            return;
        }

        dispatch(registerAsync(form))
            .unwrap()
            .then(() => {
                navigate('/welcome');
              })
            .catch((err: any) => {
                const serverErrors = err || {};
                const newErrors: any = {};

                if (serverErrors.email) {
                    setEmailError(serverErrors.email)
                }
            });
    };

    return (
        <>
            <Layout childrenClasses={undefined}>
                <div className="d-flex justify-content-center align-items-center register">
                    <div className="form-container">
                        <h2 className="mb-4 mx-auto text-center fw-bold">WELCOME TO AGRICULTURE MARKETING</h2>
                        {loading ? (
                            <Loader /> 
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className={`form-control ${errors.username?.error ? 'is-invalid' : ''}`}
                                                value={form.username}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.username?.error && <div className="invalid-feedback">{errors.username.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input
                                                type="number"
                                                id="phone_number"
                                                name="phone_number"
                                                className={`form-control ${errors.phone_number?.error ? 'is-invalid' : ''}`}
                                                value={form.phone_number}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.phone_number?.error && <div className="invalid-feedback">{errors.phone_number.message}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={`form-control ${errors.email?.error || emailError ? 'is-invalid' : ''}`}
                                                value={form.email}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.email?.error && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                className={`form-control ${errors.first_name?.error ? 'is-invalid' : ''}`}
                                                value={form.first_name}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.first_name?.error && <div className="invalid-feedback">{errors.first_name.message}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                className={`form-control ${errors.last_name?.error ? 'is-invalid' : ''}`}
                                                value={form.last_name}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.last_name?.error && <div className="invalid-feedback">{errors.last_name.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className={`form-control ${errors.password?.error ? 'is-invalid' : ''}`}
                                                value={form.password}
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.password?.error && <div className="invalid-feedback">{errors.password.message}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="password2"
                                        name="password2"
                                        className={`form-control ${errors.password2?.error ? 'is-invalid' : ''}`}
                                        value={form.password2}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    {errors.password2?.error && <div className="invalid-feedback">{errors.password2.message}</div>}
                                </div>

                                {error && <p className="text-danger">{emailError}</p>}
                                <button type="submit" className="btn btn-custom w-100">
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </form>
                        )}
                        <p className="mt-3">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Register;
