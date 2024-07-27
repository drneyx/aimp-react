import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ColumnItem {
    label: string;
    link: string;
}

interface MegaMenuItemProps {
    label: string;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    columns: {
        title: string;
        items: ColumnItem[];
    }[];
}

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({
    label,
    isActive,
    onMouseEnter,
    onMouseLeave,
    columns,
}) => {
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMouseEnterSubMenu = () => {
        setIsSubMenuActive(true);
    };

    const handleMouseLeaveSubMenu = () => {
        setIsSubMenuActive(false);
    };

    const handleMouseLeaveMenu = () => {
        setIsSubMenuActive(false);
    };

    useEffect(() => {
        if (menuRef.current) {
            const parentWidth = menuRef.current.parentElement?.offsetWidth || 0;
            menuRef.current.style.minWidth = `${parentWidth}px`;
        }
    }, []);

    return (
        <li
            className="nav-item position-static"
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeaveMenu}
        >
            <Link
                className={`nav-link text-uppercase text-white ${isActive ? 'active' : ''}`}
                to="#"
                onMouseEnter={handleMouseEnterSubMenu}
                onMouseLeave={handleMouseLeaveSubMenu}
            >
                {label}
            </Link>
            {isActive && (
                <div
                    className={`mega-menu position-absolute start-50 translate-middle-x ${isSubMenuActive ? 'd-block' : 'd-none'
                        }`}
                    ref={menuRef}
                    onMouseEnter={handleMouseEnterSubMenu}
                    onMouseLeave={handleMouseLeaveSubMenu}
                    style={{
                        zIndex: 1000,
                    }}
                >
                    <div className="container">
                        <div className="row">
                            {columns.map((column, index) => (
                                <div key={index} className="col">
                                    <div className="bg-lightgray text-start">
                                        <h5 className='column-title p-1'>{column.title}</h5>
                                    </div>
                                    <ul className="list-unstyled list-columns">
                                        {column.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className='px-1 text-start'>
                                                <Link to={item.link} className="text-dark text-start">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
};

export default MegaMenuItem;
