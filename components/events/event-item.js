import React from 'react';
import Button from '../ui/button';
import styles from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon  from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

const EventItem = (props) => {
  const { title, image, date, location, id} = props;

  const humanReadableDate = (dateToFormat) => {
    return new Date(dateToFormat).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
  };

  const formattedAddress = (locationFormat) => {
    return locationFormat.replace(',', '\n');
  };

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
        <img src={`/${image}`} alt={title} />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon/>
                    <time>{humanReadableDate(date)}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{formattedAddress(location)}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={styles.icon}><ArrowRightIcon /></span>
                </Button>
            </div>
        </div>
    </li>
  );
};

export default EventItem;