import { Fragment } from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const HomePage = (props) => {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
       <EventList items={featuredEvents} />
    </Fragment>
  );
}


export default HomePage;