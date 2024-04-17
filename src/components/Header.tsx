import React from 'react';
import './Header.css';
import { FaSearch, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Beauty Calendar</h1>
      <FaSearch className="icon" />
      <FaBars className="icon" />
    </header>
  );
}

export default Header;
