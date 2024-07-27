import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import TopMenu from '../modules/core/components/Menu';
// import Slider from '../modules/core/components/Slider';
import TopBanner from '../modules/core/topbanner/TopBanner';
import SecondBanner from '../modules/core/SecondBanner/SecondBanner';
import MenuBanner from '../modules/core/MenuBanner/MenuBanner';
import image1 from '../assets/img/carousal1.webp';
import image2 from '../assets/img/carousal2.webp';
import CustomCarousel from '../modules/core/CustomCarousel/CustomCarousel';
import TopCategories from '../modules/core/TopCategories/TopCategories';
import ProductSlider from '../modules/core/ProductSlider/ProductSlider';
import BlogSection from '../modules/core/NewsSection/NewsSection';
import Footer from '../modules/core/Footer/Footer';
import Layout from '../modules/core/Partials/Layout';
// import NewsSection from '../modules/core/NewsSection/NewsSection';

const HomePage: React.FC = () => {

    const slides = [
        {
            subtitle: '100% genuine Products',
            title: 'Tasty & Healthy Organic Food',
            description: 'Discover our wide range of organic products...',
            link: '/collections/vegetables',
            image: '//rntest1.myshopify.com/cdn/shop/files/23_1030x.png?v=1651226110'
        },
        {
            subtitle: '2 second caurosk genuine Products',
            title: 'Tasty & Healthy Organic Food',
            description: 'Discover our wide range of organic products...',
            link: '/collections/vegetables',
            image: 'https://rntest1.myshopify.com/cdn/shop/files/21_1030x.png?v=16512262180'
        },
    ];

    return (
        <>
            <Layout childrenClasses={undefined}>
                <CustomCarousel slides={slides} />
                <TopCategories />
                <ProductSlider
                    title="Featured Products"
                />
                <BlogSection />
            </Layout>
        </>
    );
};

export default HomePage;




