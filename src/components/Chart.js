import React from 'react';
import { barData } from '../data/barChartData';
import Bars from './Bars';
import styles from '../styles/chart.module.css';

/**
 * Functional component representing the Chart.
 * Displays bars based on the provided bar data.
 * @returns {JSX.Element} - Rendered Chart component.
 */
function Chart() {
  return (
    <>
      <div className={styles.chartContainer}>
        {barData.map((item) => (
          <Bars color={item.color} height={item.data} />
        ))}
      </div>
    </>
  );
}

export default Chart;
