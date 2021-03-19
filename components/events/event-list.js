import React from 'react';
import EventItem from './event-item';
import styles from './event-list.module.css';

const EventList = (props) => {
  const { items } = props;  
  return (
    <ul className={styles.list}>
        {
          items.map((item,index) => <EventItem
            key={item.id}
            index={index}
            id={item.id}
            location={item.location}
            image={item.image}
            date={item.date}
          />)
        }
    </ul> 
  );
};

export default EventList;