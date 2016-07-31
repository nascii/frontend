import React from 'React';

import Sensor from 'components/sensor';

import styles from './relations.css';

const Relations = ({dots}) => (
  <svg width="100%" height="100%">
    {dots.map(
      ({x, y, color}, index) => <Sensor x={x} y={y} color={color} key={index} />
    )}
  </svg>
);

export default Relations;
