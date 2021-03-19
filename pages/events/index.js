import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

function EventPage(props) {
  const allEvents = getAllEvents();
  const router = useRouter();

  const onSubmit = (selectedYear, selectedMonth) => {
    const path = `/events/${selectedYear}/${selectedMonth}`;
    console.log(path);

    router.push(path);
  };

  return (
    <Fragment>
        <EventSearch onSubmit={onSubmit}/>
       <EventList items={allEvents} />
    </Fragment>
  );
}


export default EventPage;
