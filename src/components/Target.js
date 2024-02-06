// Target.js
import React from 'react';
import styles from '../styles/target.module.css';

/**
 * Target Component: Displays a target with inner and outer progress circles.
 * @returns {JSX.Element} - Target component.
 */
function Target() {
    return (
        <div className={styles.outerProgress}>
            {/* Inner target with diamond shapes. */}
            <div className={styles.innerProgress}>
                <div className={styles.innerCircle}>
                    <div className={styles.diamondOutter}></div>
                    <div className={styles.diamondInner}></div>
                </div>
            </div>

            {/* Adding progress bar in inner target. */}
            <svg width="108" height='108' className={styles.barProgressInner}>
                <g transform={`rotate(270 54 54)`}>
                    <circle r='42' cx='54' cy='54' className={styles.circle}></circle>
                    <circle r='42' cx='54' cy='54' className={styles.innerProgressCircle}></circle>
                </g>
            </svg>

            {/* Adding progress bar in outer target. */}
            <svg width="146" height='146' className={styles.barProgressOuter}>
                <g transform={`rotate(-80 60 60)`}>
                    <circle r='56' cx='60' cy='60' className={styles.circleOuter}></circle>
                    <circle r='56' cx='60' cy='60' className={styles.outerProgressCircle2}></circle>
                    <circle r='56' cx='60' cy='60' className={styles.outerProgressCircle1}></circle>
                </g>
            </svg>
        </div>
    );
}

export default Target;
