import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert/error-alert';

const FilteredEventPage = () => {
    // runs after first render
    const router = useRouter();
    const filteredData = router.query.slug;
    
    if (!filteredData) {
      return <p className='center'>loading....</p>
    }
    
    // transform the string to number, since the url params are always string
    const filterYear = +filteredData[0];
    const filterMonth = +filteredData[1];

    if (
        isNaN(filterYear) || isNaN(filterMonth) ||
        filterYear > 2030 || filterYear < 2021 ||
        filterMonth > 12 || filterMonth < 1
      ) {
      return <Fragment>
        <ErrorAlert>
           <p className='center'>Filters are not correct, please use drop down to filter</p>
        </ErrorAlert>
        <div className='center'>
             <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    }

    const filteredEvents = getFilteredEvents({
      year: filterYear,
      month: filterMonth 
    });

    if (!filteredEvents || filteredEvents.length === 0) {
      return <Fragment>
           <ErrorAlert>
             <p className='center'>No Events Found</p>
            </ErrorAlert> 
           <div className='center'>
             <Button link='/events'>Show All Events</Button>
           </div>
        </Fragment>
    }

    const date = new Date(filterYear, filterMonth - 1);

    return (
      <Fragment>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents} />
      </Fragment>
    );
 };
 
 export default FilteredEventPage;