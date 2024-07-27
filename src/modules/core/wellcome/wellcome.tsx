import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import Layout from '../Partials/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


const Welcome: React.FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <>
            <Layout childrenClasses={undefined}>
                <div className="welcome-container d-flex align-items-center">
                    <div className="welcome-content d-flex flex-column">
                        <h1 className="welcome-heading">Welcome to {user?.username}!</h1>
                        <p className="welcome-message">
                            Thank you for registering. We are thrilled to have you join our community.
                            Explore our platform and get started on your journey.
                        </p>
                        <Link to="/" className="btn w-btn-custom">Continue Shopping!!</Link>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Welcome;
