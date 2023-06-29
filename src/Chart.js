import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ measurements }) => {

  function formatDate(timestamp) {
    const date = timestamp.toDate();
    const formattedDate = date.toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    return formattedDate;
  }
      
  // Extracting the required data for the chart
  const chartData = {
    labels: measurements.map((measurement) => measurement?.timestamp?.toDate()),
    datasets: [
      {
        label: 'Weight',
        data: measurements.map((measurement) => measurement.weight),
        fill: false,
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Burst Size',
        data: measurements.map((measurement) => measurement.burstSize),
        fill: false,
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: 'Waist Size',
        data: measurements.map((measurement) => measurement.waistSize),
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: 'Hip Size',
        data: measurements.map((measurement) => measurement.hipSize),
        fill: false,
        borderColor: 'orange',
        backgroundColor: 'orange',
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: measurements.map((measurement) => formatDate(measurement?.timestamp)),
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Measurements',
        },
      },
    },
  };

  return (
    <div className="m-8">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
