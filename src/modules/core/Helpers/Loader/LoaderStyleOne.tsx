// Loader.tsx
import React from 'react';
import './Loader.css'; // Import the CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-inner"></div>
        <div className="loader-inner"></div>
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default Loader;
