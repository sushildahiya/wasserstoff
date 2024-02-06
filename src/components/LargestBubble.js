import styles from '../styles/largestbubble.module.css';

// Functional component representing the largest-sized bubble
export const LargestBubble = ({ left, top }) => {
  return (
    // Container div for the largest-sized bubble with dynamic positioning
    <div style={{ left: left, top: top }} className={styles.largestBubbleContainer}></div>
  );
};
