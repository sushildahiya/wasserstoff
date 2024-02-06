import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { bubbleChartData, xAxesLabel } from '../data/bubble-chart-data';

/**
 * Functional component representing a Bubble Chart Modal.
 * Uses Chart.js library for rendering a bubble chart.
 * @returns {JSX.Element} - Rendered Bubble Chart Modal component.
 */
function BubbleChartModal() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart options for the Bubble Chart
    const chartOptions = {
      maintainAspectRatio: false, // Set to false to control height and width manually
      scales: {
        x: {
          type: 'category',
          labels: xAxesLabel,
        },
        y: {
          type: 'linear',
          ticks: {
            stepSize: 200,
            max: 1000,
            callback: function (value) {
              return value;
            },
          },
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
      },
    };

    // Creating a new instance of Chart.js Bubble Chart
    const chartInstance = new Chart(chartRef.current, {
      type: 'bubble',
      data: bubbleChartData,
      options: chartOptions,
    });

    // Cleanup function to destroy the chart instance on component unmount
    return () => {
      chartInstance.destroy();
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return <canvas ref={chartRef} />;
}

export default BubbleChartModal;
