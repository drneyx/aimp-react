import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TopCategories.css';


const categories = [
    {
        href: "/collections/dried-foods",
        src: "//rntest1.myshopify.com/cdn/shop/collections/category-4_118x.png?v=1652225571",
        alt: "Dried Foods",
        title: "Dried Foods",
        items: 16,
    },
    {
        href: "/collections/bread-cake",
        src: "//rntest1.myshopify.com/cdn/shop/collections/category-4_bb613a8d-0b8d-4dc0-b7f4-9da6103e1c87_118x.png?v=1652225562",
        alt: "Bread & Cake",
        title: "Bread & Cake",
        items: 22,
    },
    {
        href: "/collections/food-drinks",
        src: "//rntest1.myshopify.com/cdn/shop/collections/category-2_d7549c6f-0f2e-49ed-a729-3d5e47f77726_118x.png?v=1652225353",
        alt: "Food & Drinks",
        title: "Food & Drinks",
        items: 13,
    },
    {
        href: "/collections/fruits",
        src: "//rntest1.myshopify.com/cdn/shop/collections/category-3_118x.png?v=1652225389",
        alt: "Fruits",
        title: "Fruits",
        items: 20,
    },
];

const CategoryList3: React.FC = () => {
    return (
        <div className="category-list3 py-3">
            <Container className="bg-white py-4">
                <Row>
                    <Col>
                        <div className="text-start mb-4">
                            <h1 className="display-1 font-weight-bold">Top Categories</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center gx-5">
                    {categories.map((category, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="d-flex justify-content-center mb-4 p-2 "
                        >
                            <div className="card bg-wheat w-100 p-4 text-center">
                                <a href={category.href} className="d-block mb-3">
                                    <img
                                        src={category.src}
                                        alt={category.alt}
                                        className="img-fluid"
                                        loading="lazy"
                                        width="103"
                                        height="99"
                                    />
                                </a>
                                <h5 className="font-weight-bold">
                                    <a href={category.href} className="text-decoration-none">
                                        {category.title}
                                    </a>
                                </h5>
                                <h6 className="font-weight-bold">({category.items} items)</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CategoryList3;
