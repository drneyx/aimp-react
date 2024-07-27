import React, { useState } from 'react';
import './SearchResultsPage.css';
import Layout from '../modules/core/Partials/Layout';
import BreadcrumbCom from '../modules/core/BreadCrumb/BreadCrumb';

interface Product {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    category: string;
    region: string;
}

const products: Product[] = [
    // Dummy product data
    { id: 1, imageUrl: 'https://rntest1.myshopify.com/cdn/shop/products/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_1024x1024.png?v=1651222976', title: 'Product 1', price: 100, category: 'Category 1', region: 'Region 1' },
    { id: 2, imageUrl: 'https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534', title: 'Product 2', price: 200, category: 'Category 2', region: 'Region 2' },
    { id: 2, imageUrl: 'https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534', title: 'Product 2', price: 200, category: 'Category 2', region: 'Region 2' },
    { id: 2, imageUrl: 'https://rntest1.myshopify.com/cdn/shop/products/13_93c60bd0-dd3b-4f16-8d90-a47f81a827b0_1024x1024.png?v=1653225534', title: 'Product 2', price: 200, category: 'Category 2', region: 'Region 2' },
    // Add more products as needed
];

const SearchResultsPage: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handleRegionChange = (region: string) => {
        setSelectedRegions((prev) =>
            prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
        );
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange([0, Number(e.target.value)]);
    };

    const filteredProducts = products.filter((product) =>
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedRegions.length === 0 || selectedRegions.includes(product.region)) &&
        product.price <= priceRange[1]
    );

    return (
        <>
            <Layout childrenClasses={undefined}>
                <BreadcrumbCom
                    paths={[
                        { name: 'Home', path: '/' },
                        { name: 'Search Results', path: '/checkout' },
                    ]}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sidebar p-3">
                                <h4>Filters</h4>

                                <div className="filter-section mb-4">
                                    <h5>Categories</h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="category1"
                                            onChange={() => handleCategoryChange('Category 1')}
                                        />
                                        <label className="form-check-label" htmlFor="category1">Category 1</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="category2"
                                            onChange={() => handleCategoryChange('Category 2')}
                                        />
                                        <label className="form-check-label" htmlFor="category2">Category 2</label>
                                    </div>
                                    {/* Add more categories as needed */}
                                </div>

                                <div className="filter-section mb-4">
                                    <h5>Regions</h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="region1"
                                            onChange={() => handleRegionChange('Region 1')}
                                        />
                                        <label className="form-check-label" htmlFor="region1">Region 1</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="region2"
                                            onChange={() => handleRegionChange('Region 2')}
                                        />
                                        <label className="form-check-label" htmlFor="region2">Region 2</label>
                                    </div>
                                    {/* Add more regions as needed */}
                                </div>

                                <div className="filter-section mb-4">
                                    <h5>Price</h5>
                                    <input
                                        type="range"
                                        className="form-range"
                                        min="0"
                                        max="1000"
                                        value={priceRange[1]}
                                        onChange={handlePriceChange}
                                    />
                                    <div>${priceRange[0]} - ${priceRange[1]}</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="col-md-4 mb-4">
                                        <div className="card">
                                            <img src={product.imageUrl} className="card-img-top" alt={product.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">${product.price}</p>
                                                <p className="card-text">Category: {product.category}</p>
                                                <p className="card-text">Region: {product.region}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SearchResultsPage;
