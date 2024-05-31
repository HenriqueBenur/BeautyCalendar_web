import React, { useState } from 'react';
import './styles/Header.css';
import LogoSVG from './assets/Svg/LogoSVG'
import HamburgerSVG from './assets/Svg/HamburgerSVG';
import SearchSVG from './assets/Svg/SearchSVG';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div id='LogoFull'>
        <h1 id='BeautyCalendar'>Beauty Calendar</h1>
        <div id='Pinguelo'>
          <LogoSVG />
        </div>
      </div>
      <div id='TopButtons'>
        <div id='SearchButton'>
          <SearchSVG />
        </div>
        <div id='HamburgerButton' onClick={toggleMenu}>
          <HamburgerSVG />
        </div>
        <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>     
    </header>
  );
}

export default Header;
