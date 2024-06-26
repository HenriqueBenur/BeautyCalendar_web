import React from 'react';
import './HamburgerSVG.css'

const HamburgerSVG = () => {
    return (
      <div id='ButtonBox'>
        <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" id='HamburgerMenu'>
        <path d="M1 1H19M1 8H19M1 15H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    );
};

export default HamburgerSVG;
