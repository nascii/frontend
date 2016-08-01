import React from 'react';

import styles from './Button.css';

const Button = ({currentModeId, onPress}) => (
  <button className={styles.button} onClick={onPress}>
    <span className={styles.text}>
      Submit
    </span>
  </button>
)

export default Button;
