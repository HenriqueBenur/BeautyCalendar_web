import React from 'react';
import './styles/SideMenu.css';

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;  // Function that does not take any arguments and does not return anything
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className='closeButton' onClick={toggleMenu}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    width="24px"  // Increased from 10px to 24px
                    height="24px" // Increased from 10px to 24px
                    viewBox="0 0 122.878 122.88" 
                    xmlSpace="preserve"
                >
                    <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127
                    c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886
                    c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0
                    c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313z"/>
                </svg>
                </div>
            </div>
        </>
    );
};

export default SideMenu;
