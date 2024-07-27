import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  isActive: boolean;
  link: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive, link, onMouseEnter, onMouseLeave }) => {
  return (
    <li className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <Link to={link} className={`nav-link text-uppercase text-white ${isActive ? 'active' : ''}`}>{label}</Link>
    </li>
  );
}

export default MenuItem;
