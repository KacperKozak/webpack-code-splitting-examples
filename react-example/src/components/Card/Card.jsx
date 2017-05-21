import React from 'react';
import styles from './Card.css';

const Card = props => (
  <article className={styles.card}>
    {props.children}
  </article>
);

export default Card;
