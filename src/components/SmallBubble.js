// SmallBubble.js
import React from 'react';
import styles from '../styles/smallbubble.module.css';

/**
 * SmallBubble Component: Displays a small bubble at a specified position.
 * @param {string} top - Top position of the small bubble.
 * @param {string} left - Left position of the small bubble.
 * @returns {JSX.Element} - SmallBubble component.
 */
export const SmallBubble = ({ top, left }) => {
    return (
        <div style={{ top: top, left: left }} className={styles.smallBubbleContainer}></div>
    );
}
