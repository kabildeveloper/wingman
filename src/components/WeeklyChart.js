import React from 'react';
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, ResponsiveContainer } from 'recharts';

const generateRandomData = () => {
  const data = [];
  let prevCalls = 50;
  let prevAnswered = 40;
  let prevExperts = 5;

  for (let i = 0; i < 7; i++) {
    let calls = Math.round(prevCalls + (Math.random() - 0.5) * 20);
    let answered = Math.round(prevAnswered + (Math.random() - 0.5) * 20);
    let experts = Math.round(2 + Math.random() * 8); // Ensuring experts are between 2 and 10

    // Ensure calls are always above answered
    if (calls < answered) {
      calls = answered + Math.round(Math.random() * 10); // Set calls to be higher than answered
    }

    data.push({
      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
      calls: Math.max(0, calls),
      answered: Math.max(0, answered),
      experts: Math.max(2, Math.min(experts, 10)), // Ensuring experts are between 2 and 10
    });

    prevCalls = calls;
    prevAnswered = answered;
    prevExperts = experts;
  }
  return data;
};

const data = generateRandomData();

const WeeklyChart = () => (
  <div style={{ width: '100%', height: '284px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#DCDFE4" vertical={false} />
        <XAxis style={{fontSize: '0.75rem'}} axisLine={false} tickLine={false}  dataKey="day" />
        <YAxis
          style={{ fontSize: '0.75rem' }}
          axisLine={false} tickLine={false}
          yAxisId="left"
          label={{
            value: 'Experts Online',
            angle: -90,
            position: 'insideLeft',
            dy: 60,
            fontSize: '0.75rem',
          }}
        />
        <YAxis
          style={{ fontSize: '0.75rem' }}
          axisLine={false} tickLine={false}
          yAxisId="right"
          orientation="right"
          label={{
            value: 'Calls',
            angle: 90,
            position: 'insideRight',
            dy: 20,
            fontSize: '0.75rem',
          }}
        />
        <Tooltip />
        <Legend />
        <Bar  yAxisId="left" dataKey="experts" barSize={32} fill="#FFF3C6" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="calls"
          strokeWidth={2}
          stroke="#15B79F"
          curve="natural"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="answered"
          strokeWidth={2}
          stroke="#8A94A6"
          curve="natural"
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyChart;
