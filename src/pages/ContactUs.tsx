import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../modules/core/Partials/Layout';
import BreadcrumbCom from '../modules/core/BreadCrumb/BreadCrumb';
import BlogSection from '../modules/core/NewsSection/NewsSection';

const ContactUs: React.FC = () => {
    return (
        <>
            <Layout childrenClasses={undefined}>
                <BreadcrumbCom
                    paths={[
                        { name: 'Home', path: '/' },
                        { name: 'Contact Us', path: '/single-product' },
                    ]}
                />
                <BlogSection />
            </Layout>
        </>
    );
};

export default ContactUs;
