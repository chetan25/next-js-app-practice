import { useRef } from 'react';
import Button from '../ui/button';
import styles from './events-search.module.css';

const EventSearch = props => {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
     
    props.onSubmit(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form}>
      <div className={styles.controls}>
          <div className={styles.control}>
              <label htmlFor='year'>Year</label>
              <select id='year' ref={yearRef}>
                 <option value='2021'>2021</option>
                 <option value='2022'>2022</option>
              </select>
          </div>
          <div className={styles.control}>
              <label htmlFor='month'>Month</label>
              <select id='month' ref={monthRef}>
                 <option value='1'>Jan</option>
                 <option value='2'>Feb</option>
                 <option value='3'>Mar</option>
                 <option value='4'>Apr</option>
                 <option value='5'>May</option>
                 <option value='6'>Jun</option>
                 <option value='7'>Jly</option>
                 <option value='8'>Aug</option>
                 <option value='9'>Sep</option>
                 <option value='10'>Oct</option>
                 <option value='11'>Nov</option>
                 <option value='12'>Dec</option>
              </select>
          </div>
      </div>
      <Button onSubmit={submitHandler}>Find Events</Button>
    </form>
  );
};

export default EventSearch;