import React from 'react';
import './Header.css';
import LogoSVG from './LogoSVG'
import HamburgerSVG from './HamburgerSVG';
import SearchSVG from './SearchSVG';

const Header: React.FC = () => {
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
        <div id='HamburgerButton'>
          <HamburgerSVG />
        </div> 
      </div>     
    </header>
  );
}

export default Header;
