import React, { useState, useEffect } from 'react';
import './CustomCarousel.css';

const CustomCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentSlide = slides[currentIndex];
    const isEvenIndex = currentIndex % 2 === 0;

    console.log('INDEXX' + isEvenIndex)

    return (
        <div className="carousel-container d-flex align-items-center">
            <div className="container h-100 d-flex align-items-center">
                <div className="row">
                    {isEvenIndex ? (
                        <>
                            <div className="col-md-6 text-center h-100 d-flex align-items-center">
                                <div className="carousel-image">
                                    <img
                                        loading="lazy"
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 text-end w-100">
                                <div className="carousel-content position-relative mx-auto">
                                    <div className="carousel-header mb-3 animate__animated animate__fadeInUp">
                                        <h6 className="genuine-products">{currentSlide.subtitle}</h6>
                                    </div>
                                    <h1 className="carousel-title mb-3 animate__animated animate__fadeInUp">
                                        {currentSlide.title} fdfd
                                    </h1>
                                    <div className="carousel-subtext animate__animated animate__fadeInUp">
                                        {currentSlide.description}
                                    </div>
                                    <div className="mt-4 animate__animated animate__fadeInUp">
                                        <a href={currentSlide.link} className="btn btn-primary btn-shop">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-md-6 text-start w-100">
                                <div className="carousel-content position-relative mx-auto">
                                    <div className="carousel-header mb-3 animate__animated animate__fadeInUp">
                                        <h6 className="genuine-products">{currentSlide.subtitle} imo</h6>
                                    </div>
                                    <h1 className="carousel-title mb-3 animate__animated animate__fadeInUp">
                                        {currentSlide.title} 
                                    </h1>
                                    <div className="carousel-subtext animate__animated animate__fadeInUp">
                                        {currentSlide.description}
                                    </div>
                                    <div className="mt-4 animate__animated animate__fadeInUp">
                                        <a href={currentSlide.link} className="btn btn-primary btn-shop">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center h-100 d-flex align-items-center">
                                <div className="carousel-image">
                                    <img
                                        loading="lazy"
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="carousel-controls">
                    <button onClick={goToPrevious} className="carousel-control-prev">&lt;</button>
                    <button onClick={goToNext} className="carousel-control-next">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;
