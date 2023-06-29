import React from 'react';

const DataTable = ({ measurements }) => {
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

  return (
    <div className='m-9'>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Weight</th>
            <th className="py-2 px-4 border">Burst Size</th>
            <th className="py-2 px-4 border">Waist Size</th>
            <th className="py-2 px-4 border">Hip Size</th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement) => (
            <tr key={measurement.id} className="border">
              <td className="py-2 px-4 border">{formatDate(measurement.timestamp)}</td>
              <td className="py-2 px-4 border">{measurement.weight}</td>
              <td className="py-2 px-4 border">{measurement.burstSize}</td>
              <td className="py-2 px-4 border">{measurement.waistSize}</td>
              <td className="py-2 px-4 border">{measurement.hipSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
