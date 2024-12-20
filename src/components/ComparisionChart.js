import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for this week and past week
const data = [
  { week: 'This Week', consultations: 250, ordersClose: 200 },
  { week: 'Past Week', consultations: 220, ordersClose: 180 },
];

const BarChartExample = () => (
  <div style={{ width: '100%', height: '284px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -34 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#DCDFE4" vertical={false} />
        <XAxis dataKey="week" style={{ fontSize: '12px' }} axisLine={false} tickLine={false} />
        <YAxis style={{ fontSize: '12px' }} axisLine={false} tickLine={false}  />
        <Tooltip />
        <Legend wrapperStyle={{fontSize: '12px'}}/>
        {/* Bars for Consultations */}
        <Bar dataKey="consultations" fill="#CCFBEF" barSize={30} name="Consultations" />
        {/* Bars for Orders Closed */}
        <Bar dataKey="ordersClose" fill="#134E48" style={{borderRadius:"8px"}} barSize={30} name="Orders Closed" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartExample;
