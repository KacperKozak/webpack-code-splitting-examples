import React from 'react';
import { LineChart, BarChart } from '../../components/Charts';

import styles from './Admin.css';
import { data1, data2 } from './data';
import Card from '../../components/Card';


const Admin = () => (
  <div className={styles.admin}>
    <Card>
      <h3>Panel</h3>
      <LineChart data={data1} />
    </Card>
    <Card>
      <h3>Panel</h3>
      <BarChart data={data2} />
    </Card>
  </div>
);

export default Admin;
