import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MegaMenuItem from './MegaMenuItem';
import './MenuBanner.css';
import '../../../index.css';

const MenuBanner: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="menu-banner navbar navbar-expand-lg navbar-dark bg-darkgreen">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <MenuItem
                            label="Home"
                            isActive={activeMenu === 'home'}
                            onMouseEnter={() => handleMouseEnter('home')}
                            onMouseLeave={handleMouseLeave}
                            link='/'
                        />
                        <MegaMenuItem
                            label="Products"
                            isActive={activeMenu === 'products'}
                            onMouseEnter={() => handleMouseEnter('products')}
                            onMouseLeave={() => handleMouseEnter('products')}
                            columns={[
                                {
                                    title: 'Seeds',
                                    items: [
                                        { label: 'Vegetables', link: '#' },
                                        { label: 'Fruits', link: '#' },
                                        { label: 'Grains', link: '#' },
                                    ]
                                },
                                {
                                    title: 'Fertilizers',
                                    items: [
                                        { label: 'Organic', link: '#' },
                                        { label: 'Chemical', link: '#' },
                                        { label: 'Liquid', link: '#' },
                                    ]
                                },
                                {
                                    title: 'Pesticides',
                                    items: [
                                        { label: 'Organic', link: '#' },
                                        { label: 'Chemical', link: '#' },
                                        { label: 'Liquid', link: '#' },
                                    ]
                                }
                            ]}
                        />
                        <MegaMenuItem
                            label="Best Sellers"
                            isActive={activeMenu === 'best-sellers'}
                            onMouseEnter={() => handleMouseEnter('best-sellers')}
                            onMouseLeave={handleMouseLeave}
                            columns={[
                                {
                                    title: 'Top-Rated Seeds',
                                    items: [
                                        { label: 'Best-Selling Vegetable Seeds', link: '#' },
                                        { label: 'Best-Selling Fruit Seeds', link: '#' },
                                        { label: 'Best-Selling Grain Seeds', link: '#' },
                                    ]
                                },
                                {
                                    title: 'Popular Fertilizers',
                                    items: [
                                        { label: 'Top Organic Fertilizers', link: '#' },
                                        { label: 'Top Chemical Fertilizers', link: '#' },
                                        { label: 'Top Liquid Fertilizers', link: '#' },
                                    ]
                                },
                                {
                                    title: 'Customer Favorite Tools',
                                    items: [
                                        { label: 'Best Hand Tools', link: '#' },
                                        { label: 'Best Power Tools', link: '#' },
                                        { label: 'Best Irrigation Equipment', link: '#' },
                                    ]
                                }
                            ]}
                        />
                        <MegaMenuItem
                            label="New Arrivals"
                            isActive={activeMenu === 'newarrivals'}
                            onMouseEnter={() => handleMouseEnter('newarrivals')}
                            onMouseLeave={handleMouseLeave}
                            columns={[
                                {
                                    title: 'New Seeds',
                                    items: [
                                        { label: 'New Vegetable Seeds', link: 'search-results' },
                                        { label: 'New Fruit Seeds', link: 'search-results' },
                                        { label: 'New Grain Seeds', link: 'search-results' },
                                    ]
                                },
                                {
                                    title: 'Latest Fertilizers',
                                    items: [
                                        { label: 'New Organic Fertilizers', link: '#' },
                                        { label: 'New Chemical Fertilizers', link: '#' },
                                        { label: 'New Liquid Fertilizers', link: '#' },
                                    ]
                                },
                                {
                                    title: 'New Pesticides',
                                    items: [
                                        { label: 'New Organic Pesticides', link: '#' },
                                        { label: 'New Chemical Pesticides', link: '#' },
                                        { label: 'New Liquid ', link: '#' },
                                    ]
                                }
                            ]}
                        />
                         <MenuItem
                            label="Promotions"
                            isActive={activeMenu === 'Promotions'}
                            onMouseEnter={() => handleMouseEnter('Promotions')}
                            onMouseLeave={handleMouseLeave}
                            link="/promotions"
                        />
                        <MenuItem
                            label="About Us"
                            isActive={activeMenu === 'about'}
                            onMouseEnter={() => handleMouseEnter('about')}
                            onMouseLeave={handleMouseLeave}
                            link='/aboutus'
                        />
                        <MenuItem
                            label="News & Updates"
                            isActive={activeMenu === 'newsupdates'}
                            onMouseEnter={() => handleMouseEnter('newsupdates')}
                            onMouseLeave={handleMouseLeave}
                            link='/news-updates'
                        />
                        <MenuItem
                            label="Contact Us"
                            isActive={activeMenu === 'Contact Us'}
                            onMouseEnter={() => handleMouseEnter('Contact Us')}
                            onMouseLeave={handleMouseLeave}
                            link='/contactus'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuBanner;
