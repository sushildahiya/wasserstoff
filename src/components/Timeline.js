// Timeline.js
import React from 'react';
import styles from '../styles/timeline.module.css';

/**
 * Timeline Component: Displays a timeline with different time intervals.
 * @param {string} time - The selected time interval.
 * @param {function} setTime - A function to set the selected time interval.
 * @returns {JSX.Element} - Timeline component.
 */
function Timeline({ time, setTime }) {
    // Array containing time intervals with their notations.
    const timeline = [
        { timeInt: '1week', notation: '1W' },
        { timeInt: '1month', notation: '1M' },
        { timeInt: '3months', notation: '3M' },
        { timeInt: '1year', notation: '1Y' },
        { timeInt: 'all', notation: 'ALL' }
    ];

    return (
        <div className={styles.timeline}>
            <p>Timeline</p>
            <div>
                {/* Mapping through the timeline array to display time intervals. */}
                {timeline.map((item) => (
                    <p
                        key={item.timeInt}
                        onClick={() => setTime(item.timeInt)}
                        className={time === item.timeInt ? styles.currentTimeInterval : ''}
                    >
                        {item.notation}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
