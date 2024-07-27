import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    link: string;
    imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, link, imageUrl }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-5 aos-init aos-animate" data-aos="fade-left">
            <div className="card h-100 blog-card">
                <a href={link} className="image-wrapper overflow-hidden d-block">
                    <img src={imageUrl} alt={title} className="img-fluid image-position-size" />
                </a>
                <div className="card-body shadow-sm aos-init aos-animate" data-aos="fade-left">
                    <div className="text-start mb-2">
                        <ul className="list-inline m-0">
                            <li className="list-inline-item fw-bold">
                                <a href="#" className="text-decoration-none text-dark text-radh">
                                    <FontAwesomeIcon icon={faUser} className="text-darkgreen me-1" /> by: {author}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="text-start h4 fw-bold mb-3">
                        <a href={link} className="text-decoration-none text-dark">
                            {title}
                        </a>
                    </h3>
                    <div className="d-flex justify-content-between align-items-center border-top pt-3 px-2">
                        <div>
                            <ul className="list-inline m-0">
                                <li className="list-inline-item fw-bold text-radh" >
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-success me-1" /> {date}
                                </li>
                            </ul>
                        </div>
                        <div className="fw-bold text-success">
                            <a href={link} className="text-decoration-none text-radh fw-bold text-darkgreen">
                                Read More <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
