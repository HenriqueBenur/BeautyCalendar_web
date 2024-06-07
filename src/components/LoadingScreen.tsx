import React from 'react';
import './styles/LoadingScreen.css'; // Make sure to create this CSS file

const LoadingScreen = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
