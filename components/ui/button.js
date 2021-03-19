import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

const Button = (props) => {

  if(props.link) {
    return (
      <Link href={props.link}>
          {/* // Link component will detect the a tag and add functionality to it like click and href*/}
          <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return <button onClick={props.onSubmit} className={styles.btn}>{props.children}</button>
 
};

export default Button;