import React, { useState, ReactNode, MouseEvent } from 'react';
// import './style.css';

interface SelectboxProps {
    datas: string[];
    className?: string;
    action?: (value: string) => void;
    children?: (props: { item: string }) => ReactNode;
}

const Selectbox: React.FC<SelectboxProps> = ({ datas = [], className, action, children }) => {
    const [item, setItem] = useState(datas[0]);
    const [toggle, setToggle] = useState(false);

    const handler = (e: MouseEvent<HTMLLIElement>, value: string) => {
        if (action) {
            action(value);
        }
        setItem(value);
        setToggle(!toggle);
    };

    return (
        <>
            {datas.length > 0 && (
                <div className={`selectbox ${className || ''}`}>
                    <button
                        onClick={() => setToggle(!toggle)}
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                    >
                        {children ? children({ item }) : <span>{item}</span>}
                    </button>
                    {toggle && (
                        <div
                            className="dropdown-backdrop"
                            onClick={() => setToggle(!toggle)}
                        ></div>
                    )}
                    <div className={`dropdown-menu ${toggle ? 'show' : ''}`}>
                        <ul className="list-unstyled mb-0">
                            {datas.map((value) => (
                                <li
                                    className={`dropdown-item ${item === value ? 'active' : ''}`}
                                    key={value}
                                    onClick={(e) => handler(e, value)}
                                >
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Selectbox;
