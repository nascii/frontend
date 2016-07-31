import React from 'React';

import styles from './Menu.css';

const Menu = ({items, onItemClick, currentItemId}) => (
  <div className={styles.list}>
    {items.map(
      ({id, name}) => (
        <div className={currentItemId === id ? styles.selectedItem : styles.item} key={id} onClick={_ => onItemClick(id)}>
          {name}
        </div>
      )
    )}
  </div>
);

export default Menu;
