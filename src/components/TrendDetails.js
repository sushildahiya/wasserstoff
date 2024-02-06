// TrendDetails.js
import React from 'react';
import styles from '../styles/trend.module.css';

/**
 * TrendDetails Component: Displays details related to trends, such as Trend Goods, Shopping Views, and Store Dynamics.
 * @param {object} data - The data containing information about trends.
 * @returns {JSX.Element} - TrendDetails component.
 */
function TrendDetails({ data }) {
    // Details to be displayed, including head, info, and corresponding icon.
    const details = [
        { head: "Trend Goods", info: data.trend_goods, button: "radio_button_checked" },
        { head: "Shopping Views", info: data.shopping_views, button: "visibility" },
        { head: "Store Dynamics", info: data.store_dynamics, button: "equalizer" }
    ];

    return (
        <div className={styles.trendDetails}>
            {details.map((item) => {
                return (
                    <div>
                        <div>
                            {/* Displaying material icon based on the button property. */}
                            <span className="material-symbols-outlined">{item.button}</span>
                        </div>
                        {/* Displaying head, info, and icon information. */}
                        <p>{item.head}</p>
                        <h1>{item.info}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default TrendDetails;
