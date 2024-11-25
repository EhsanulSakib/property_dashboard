'use client'
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { propertiesData } from '../data/property.data';

const AvailabilityGraph = () => {
  // Calculate the count of Rented and Available properties
  const data = [
    { name: 'Rented', value: propertiesData.filter((property) => property.rent === 'Rented').length },
    { name: 'Available', value: propertiesData.filter((property) => property.rent === 'Available').length },
  ];

  const COLORS = ['#81D4FA', '#1565C0']; // Red for Rented, Green for Available

  return (
    <div className="flex flex-col items-center justify-center py-4 h-full bg-primary/5 rounded-md">
      <h1 className="text-2xl font-bold">
        Property Availability
      </h1>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[0] }}></span>
          <span className="text-gray-600 dark:text-gray-300">Rented</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[1] }}></span>
          <span className="text-gray-600 dark:text-gray-300">Available</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityGraph;
