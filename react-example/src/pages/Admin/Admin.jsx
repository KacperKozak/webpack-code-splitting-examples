import React from 'react';
import {
  LineChart, BarChart,
  Line, Bar,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from 'recharts';

import styles from './Admin.css';
import { data1, data2 } from './data';
import Card from '../../components/Card';


const Admin = () => (
  <div className={styles.admin}>
    <Card>
      <h3>Panel</h3>
      <LineChart
        width={700}
        height={300}
        data={data1}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Card>
    <Card>
      <h3>Panel</h3>
      <BarChart
        width={700}
        height={300}
        data={data2}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="female" stackId="a" fill="#8884d8" />
        <Bar dataKey="male" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    </Card>
  </div>
);

export default Admin;
