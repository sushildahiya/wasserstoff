import styles from '../styles/mediumbubble.module.css';

// Functional component representing a medium-sized bubble
export const MediumBubble = ({ top, left }) => {
  return (
    // Container div for the medium-sized bubble with dynamic positioning
    <div style={{ top: top, left: left }} className={styles.mediumBubbleContainer}></div>
  );
};
