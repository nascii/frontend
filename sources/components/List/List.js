import React from 'React';

import Device from 'components/Device';

// import styles from './List.css';

const List = ({items, itemComponent}) => (
  <div>
    {items.map(
      ({id, ...props}) => (
        <Device key={id} {...props} id={id} />
      )
    )}
  </div>
);

export default List;
