import React from 'react';
import styles from '../styles/bubblechart.module.css';
import Timeline from './Timeline';
import TextedBubble from './TextedBubble';
import BubbleContainer from './BubbleContainer';
import TrendDetails from './TrendDetails';
import SideButtons from './SideButtons';

/**
 * Functional component representing a Bubble Chart.
 * @param {Object} props - Component properties.
 * @param {Object} props.time - Current time state.
 * @param {Function} props.setTime - Function to update the time state.
 * @param {Array} props.data - Data for the Bubble Chart.
 * @param {number} props.zoom - Current zoom level.
 * @param {Function} props.setZoom - Function to update the zoom level.
 * @returns {JSX.Element} - Rendered Bubble Chart component.
 */
function BubbleChart({ time, setTime, data, zoom, setZoom }) {
  return (
    <div className={styles.bubbleChartContainer}>
      <div className={styles.timelineContainer}>
        <Timeline time={time} setTime={setTime} />
      </div>
      <div className={styles.bubleCont} style={{ width: `calc(100% + ${zoom}%)`, height: `calc(100% + ${zoom}%)` }}>
        <BubbleContainer data={data} time={time} setZoom={setZoom} zoom={zoom} />
      </div>
      <div className={styles.trendContainer}>
        <TrendDetails data={data} />
      </div>
      <div className={styles.sideButtons}>
        <SideButtons zoom={zoom} setZoom={setZoom} />
      </div>
    </div>
  );
}

export default BubbleChart;
