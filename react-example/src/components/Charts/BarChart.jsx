import React from 'react';
import {
  BarChart,
  Bar,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from 'recharts';

const BarChartRdy = ({ data }) => (
  <BarChart
    width={700}
    height={300}
    data={data}
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
);

export default BarChartRdy;
