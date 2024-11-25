'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueData } from '../data/revenue.data';

const RevenueGraph = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-primary/5 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Monthly Revenue
      </h1>

      <h2 className='text-primary'>
        Year 2024
      </h2>

      <div className="w-full h-96">
        <ResponsiveContainer>
          <BarChart
            data={revenueData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGraph;
