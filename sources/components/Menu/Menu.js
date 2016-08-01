import React from 'React';

import styles from './Menu.css';

const Menu = ({items, onItemClick, currentItemId, index}) => (
  <div className={index === 2 ? styles.list2 : styles.list}>
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
