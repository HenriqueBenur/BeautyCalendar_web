import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackSVG.css'

const BackSVG = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
      };

    return (
      <div id='BackSVGBox' onClick={goBack}>
        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.375 1.25L1.625 8L8.375 14.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      </div>
    );
};

export default BackSVG;
