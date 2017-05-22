import React from 'react';
import styles from './Home.css';
import CountDown from '../../components/CountDown';
import Card from '../../components/Card';

const Home = () => (
  <Card>
    <h2>Home</h2>
    <CountDown />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </Card>
);

export default Home;
