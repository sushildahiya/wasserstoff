import React from 'react';
import styled from 'styled-components';

/**
 * Styled component representing a bar in a chart.
 * @param {Object} props - Component properties.
 * @param {string} props.height - Height of the bar.
 * @param {string} props.color - Color of the bar.
 * @returns {JSX.Element} - Rendered component.
 */
const ChartBar = styled.div`
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  width: 34px;
`;

/**
 * Functional component representing a bar in a chart.
 * @param {Object} props - Component properties.
 * @param {string} props.height - Height of the bar.
 * @param {string} props.color - Color of the bar.
 * @returns {JSX.Element} - Rendered component.
 */
function Bars({ height, color }) {
  return (
    <ChartBar height={height} color={color} />
  );
}

export default Bars;
