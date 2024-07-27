import React, { useState } from 'react';
import './NewsSection.css';
import BlogCard from './BlogCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { useSpring, animated } from '@react-spring/web';

const products = [
    {
        title: "The Reason Why Everyone Love Organic Food",
        author: "Nasir Husain",
        date: "May 01, 2022",
        link: "/blogs/news/the-reason-why-everyone-love-organic-food",
        imageUrl: "https://rntest1.myshopify.com/cdn/shop/articles/8_770x.jpg?v=1651387566"
    },
    {
        title: "The Reason Why Everyone Love Organic Food",
        author: "Nasir Husain",
        date: "May 01, 2022",
        link: "/blogs/news/the-reason-why-everyone-love-organic-food",
        imageUrl: "https://rntest1.myshopify.com/cdn/shop/articles/7_770x.jpg?v=1651387469"
    },
    {
        title: "The Reason Why Everyone Love Organic Food",
        author: "Nasir Husain",
        date: "May 01, 2022",
        link: "/blogs/news/the-reason-why-everyone-love-organic-food",
        imageUrl: "https://rntest1.myshopify.com/cdn/shop/articles/6_770x.jpg?v=1651387370"
    },
    {
        title: "The Reason Why Everyone Love Organic Food",
        author: "Nasir Husain",
        date: "May 01, 2022",
        link: "/blogs/news/the-reason-why-everyone-love-organic-food",
        imageUrl: "https://rntest1.myshopify.com/cdn/shop/articles/8_770x.jpg?v=1651387566"
    },
];

const BlogSection: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < products.length - 3 ? prevIndex + 1 : prevIndex
        );
    };

    // const slideProps = useSpring({
    //     transform: `translateX(-${currentIndex * 100 / 3}%)`,
    //     config: { tension: 180, friction: 10 }
    // })
    
    return (
        <div data-section="latestBlog" 
             className="pt-0 pb-5 py-5"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             >
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="text-start mb-4">
                            {/* <h6 className="text-uppercase text-success font-weight-bold mb-3">Blog & Insights</h6> */}
                            <h1 className="display-1 fw-bold mb-3">
                                News Feed<span className="text-success">.</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row blog-section">

                    {hover && (
                        <Button
                            variant="success"
                            className="slider-button-left"
                            onClick={handlePrevClick}
                            disabled={currentIndex === 0}
                        >
                           <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                    )}

                    {/* <animated.div className="row blog-cards-container" style={slideProps}> */}
                    {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
                        <BlogCard
                            title={product.title}
                            key={index}
                            author={product.author}
                            date={product.date}
                            link={product.link}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                    {/* </animated.div> */}

                    {hover && (
                        <Button
                            variant="success"
                            className="slider-button-right"
                            onClick={handleNextClick}
                            disabled={currentIndex >= products.length - 3}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;


