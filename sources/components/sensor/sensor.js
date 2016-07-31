import React from 'React';
import styles from './sensor.css';

const Sensor = ({x, y, color}) => (
  <g
      strokeWidth={4}
      transform={`translate(${x}, ${y})`}
      onMouseDown={e => console.log(e)}
      onMouseUp={_ => console.log('onMouseUp')}>
    <circle r={53} stroke="white" fill="white" />
    <circle r={50} stroke={color} fill="white" />
  </g>
);

export default Sensor;
