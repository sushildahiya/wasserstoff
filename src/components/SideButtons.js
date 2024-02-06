import React from 'react';
import styles from '../styles/buttons.module.css';

function SideButtons({ zoom, setZoom }) {
  // Function to zoom in
  const ZoomIn = () => {
    if (zoom === 500) {
      return; // Prevent zooming in beyond the maximum value
    }
    setZoom((prev) => prev + 100);
  };

  // Function to zoom out
  const ZoomOut = () => {
    if (zoom === 0) {
      return; // Prevent zooming out beyond the minimum value
    }
    setZoom((prev) => prev - 100);
  };

  return (
    <div className={styles.buttonsContainer}>
      <div>
        {/* Zoom In button */}
        <svg
          onClick={ZoomIn}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#5A5A89" />
        </svg>
        {/* Zoom Out button */}
        <svg
          onClick={ZoomOut}
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0H8H14V2H8H6H0V0H6Z" fill="#5A5A89" />
        </svg>
      </div>
      
    </div>
  );
}

export default SideButtons;
