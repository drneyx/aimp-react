import React from 'react';
import ProductCardStyleOne from '../Helpers/Cards/ProductCardStyleOne';
import DataIteration from '../Helpers/DataIteration';
import Star from '../Helpers/icons/Star';

interface SallerInfoProps {
    products: any[]; // Adjust type according to your data structure
}

const SallerInfo: React.FC<SallerInfoProps> = ({ products }) => {
    return (
        <div className="saller-info-wrapper w-full">
            <div className="saller-info sm:flex justify-between items-center pb-5 border-b border-gray-200">
                <div className="sm:flex sm:space-x-5 items-center sm:w-1/4">
                    <div className="saller w-20 h-20 rounded-full overflow-hidden">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                            alt="saller"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h6 className="text-lg font-medium leading-7">Ridoy Rock</h6>
                        <p className="text-sm text-gray-600 leading-7">London, United Kingdom</p>
                        <div className="flex items-center mt-1">
                            <div className="flex">
                                <Star w="15" h="15" />
                                <Star w="15" h="15" />
                                <Star w="15" h="15" />
                                <Star w="15" h="15" />
                                <Star w="15" h="15" />
                            </div>
                            <span className="text-sm text-gray-600 ml-1">(4.5)</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-16 mt-5 sm:mt-0">
                    <div className="w-full mb-5 sm:mb-0">
                        <ul className="list-none">
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Products</span>: 120
                            </li>
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                            </li>
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Tags</span>: Beer, Foamer
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <ul className="list-none">
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Products</span>: 120
                            </li>
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                            </li>
                            <li className="text-gray-600 leading-7">
                                <span className="text-base font-normal text-black">Tags</span>: Beer, Foamer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="saller-product w-full mt-5">
                <h1 className="text-lg font-medium mb-5">Products from Shop</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <DataIteration datas={products} startLength={0} endLength={products.length}>
                        {({ datas }) => (
                            <div key={datas.id} className="item">
                                <ProductCardStyleOne datas={datas} type={0} />
                            </div>
                        )}
                    </DataIteration>
                </div>
            </div>
        </div>
    );
};

export default SallerInfo;
