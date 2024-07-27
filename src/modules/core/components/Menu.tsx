import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-left: 1.5rem;
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const TopMenu: React.FC = () => {
  return (
    <MenuContainer>
      <Logo>ShopLogo</Logo>
      <MenuItems>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/products">Products</Link></MenuItem>
        <MenuItem><Link to="/cart">Cart</Link></MenuItem>
        <MenuItem><Link to="/login">Login</Link></MenuItem>
      </MenuItems>
    </MenuContainer>
  );
};

export default TopMenu;