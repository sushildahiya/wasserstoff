import React from 'react';
import styles from '../styles/overview.module.css';

// Functional component representing a modal dialog
const Modal = ({ closeModal, children }) => {
  return (
    // Modal overlay to cover the entire screen
    <div className={styles.modalOverlay}>
      {/* Modal content container */}
      <div className={styles.modalContent}>
        {/* Close button to dismiss the modal */}
        <a className={styles.closeButton} onClick={closeModal}>
          &times;
        </a>
        {/* Render children components within the modal */}
        {children}
      </div>
    </div>
  );
};

// Exporting the Modal component for use in other parts of the application
export default Modal;
