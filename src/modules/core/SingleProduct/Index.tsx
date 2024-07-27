import React, { useRef, useState } from 'react';
// import BreadcrumbCom from '../BreadcrumbCom';
// import ProductCardStyleOne from '../Helpers/Cards/ProductCardStyleOne';
import DataIteration from '../Helpers/DataIteration';
import InputCom from '../Helpers/InputCom';
import Layout from '../Partials/Layout';
import ProductView from './ProductView';
import Reviews from './Reviews';
import BreadcrumbCom from '../BreadCrumb/BreadCrumb';
import SallerInfo from './SellerInfo';
import ProductCardStyleOne from '../Helpers/Cards/ProductCardStyleOne';
// import SallerInfo from './SallerInfo';
import './index.css'
import ProductSlider from '../ProductSlider/ProductSlider';

export default function SingleProductView() {
    let data = {
        "products": [
            {
                "id": 1,
                "name": "Product One",
                "description": "This is a sample product description.",
                "price": "99.99",
                "image": "product1.jpg",
                "category": "Electronics",
                "cam_product_sale": 50,
                "cam_product_available": 100,
                "campaign_product": true,
                "product_type": "Featured",
                "review": 4,
                "title": "Product One Title",
                "offer_price": "$79.99"
              },
              {
                "id": 2,
                "name": "Product Two",
                "description": "Another sample product description.",
                "price": "149.99",
                "image": "product2.jpg",
                "category": "Fashion",
                "cam_product_sale": 30,
                "cam_product_available": 80,
                "campaign_product": false,
                "review": 5,
                "title": "Product Two Title",
                "offer_price": "$129.99"
              }
        ]
      }
    const [tab, setTab] = useState('des');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [reviewLoading, setLoading] = useState(false);
    const reviewElement = useRef(null);
    const [report, setReport] = useState(false);
    const [comments, setComments] = useState([
        {
            id: Math.random(),
            author: 'Rafiqul Islam',
            comments: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining`,
            review: 4,
            replys: [
                {
                    id: Math.random(),
                    name: 'Willium Kingson',
                    comments: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
            ],
        },
        {
            id: Math.random(),
            author: 'Abdullah Mamun',
            comments: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining`,
            review: 5,
        },
    ]);

   

    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab: React.SetStateAction<string>) => {
      setActiveTab(tab);
    };
    

    return (
        <>
            <Layout  childrenClasses={undefined}>
                <div style={{ paddingTop: 0, paddingBottom: 0 }} className="pt-0 pb-0">
                    <div className="single-product-wrapper w-full">
                        <div className="product-view-main-wrapper bg-white pt-10 pb-10">
                            <div className="breadcrumb-wrapper w-full">
                                <div className="container mx-auto">
                                    <BreadcrumbCom
                                        paths={[
                                            { name: 'Home', path: '/' },
                                            { name: 'single product', path: '/single-product' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white pb-10">
                                <div className="container mx-auto">
                                    <ProductView reportHandler={() => setReport(!report)} />
                                </div>
                            </div>
                        </div>

                        <div className="container-fill bg-gray">
                            <div className="container mt-3 mx-auto">
                                <ul className="nav nav-tabs mx-3">
                                    <li className="nav-item">
                                        <button
                                        className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('description')}
                                        >
                                        Description
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                        className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('reviews')}
                                        >
                                        Reviews
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                        className={`nav-link ${activeTab === 'seller' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('seller')}
                                        >
                                        Seller Info
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content mb-4 p-4">
                                    {activeTab === 'description' && (
                                        <div className="tab-pane fade show active">
                                            <div className="d-flex align-items-start flex-column">
                                                <p className='fw-bold'  data-aos="fade-down-right">Home</p>
                                                <p className="text-sm mb-3 product-description" data-aos="fade-up">
                                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book..
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'reviews' && (
                                        <div className="tab-pane fade show active">
                                        <h4>Profile</h4>
                                        <p>Content for Profile tab.</p>
                                        </div>
                                    )}
                                    {activeTab === 'seller' && (
                                        <div className="tab-pane fade show active">
                                        <h4>Contact</h4>
                                        <p>Content for Contact tab.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="related-product w-full bg-white">
                            <div className="container-x mx-auto">
                                <div className="w-full py-16">
                                    <div
                                        data-aos="fade-up"
                                        className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5"
                                    >
                                        {/* <DataIteration
                                            datas={data.products}
                                            startLength={5}
                                            endLength={9}
                                        >
                                            {({ datas }) => (
                                                <div key={datas.id} className="item">
                                                    <ProductCardStyleOne datas={datas} type={0} />
                                                </div>
                                            )}
                                        </DataIteration> */}

                                        <ProductSlider title='Related Products' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {report && (
                        <div className="w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center">
                            <div
                                onClick={() => setReport(!report)}
                                className="w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                            ></div>
                            <div
                                data-aos="fade-up"
                                className="sm:w-96 sm:h-96 w-full h-full bg-white relative py-10 px-8"
                                style={{ zIndex: '999' }}
                            >
                                <div className="title-bar flex items-center justify-between mb-3">
                                    <h6 className="text-2xl font-semibold">Report Products</h6>
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => setReport(!report)}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                d="M18.364 5.63604L12 12.0001L18.364 18.3641L19.778 16.9501L14.828 12.0001L19.778 7.05004L18.364 5.63604Z"
                                                fill="#F34336"
                                            />
                                            <path
                                                d="M5.636 18.364L12 12.0001L5.636 5.63604L4.222 7.05004L9.172 12.0001L4.222 16.9501L5.636 18.364Z"
                                                fill="#F34336"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div className="inputs w-full">
                                    <div className="w-full mb-5">
                                        <InputCom
                                            label="Enter Report Title*"
                                            placeholder="Reports Headline here"
                                            type="text"
                                            name="name"
                                            inputClasses="h-12"
                                            labelClasses="text-sm font-semibold leading-6 text-black" inputHandler={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } } value={''}                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <h6 className="input-label text-sm font-semibold leading-6 text-black block mb-2">
                                            Enter Report Note*
                                        </h6>
                                        <textarea
                                            name=""
                                            id=""
                                            // cols="30"
                                            // rows="6"
                                            className="w-full focus:ring-0 focus:outline-none py-3 px-4 border border-gray-300 placeholder-gray-500 text-sm"
                                            placeholder="Type Here"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full h-12 bg-black text-white rounded-md font-semibold uppercase tracking-wider hover:bg-gray-900"
                                    >
                                        Submit Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
}
