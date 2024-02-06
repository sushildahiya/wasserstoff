// TextedBubble.js
import React from 'react';
import styles from '../styles/textedbubble.module.css';

/**
 * TextedBubble Component: Displays a bubble with text, data, and optional time.
 * @param {string} text - The text to be displayed in the bubble.
 * @param {string} data - The data value to be displayed in the bubble.
 * @param {string} time - The time value to be displayed in the bubble (optional).
 * @param {boolean} showTime - Determines whether to show the time in the bubble.
 * @returns {JSX.Element} - TextedBubble component.
 */
function TextedBubble({ text, data, time, showTime }) {
    return (
        <div className={styles.bubbleContainer}>
            {/* Displaying the provided text in the bubble. */}
            <h5>{text}</h5>
            {/* Displaying the provided data value in the bubble. */}
            <h4>${data}</h4>
            {/* Conditional rendering based on whether showTime is true. */}
            {showTime && <p>{time.slice(0, 1) + ' ' + time.slice(1)}</p>}
        </div>
    );
}

export default TextedBubble;
